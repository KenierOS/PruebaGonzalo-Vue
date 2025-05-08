import    axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useUserStore = defineStore('user',()=>{
    const users = ref([])
    const loading = ref(false)
    const error = ref(null)
    const searchQuery = ref ('')
    const selectedUser = ref(null)
    const showModal = ref(false)

    
    const fetchUsers = async () =>{
        try{
            loading.value = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            users.value = response.data
        } catch (err){
            error.value = error.message
        }finally{
            loading.value =false
        }
    }

    const filteredUsers = computed(()=>{
        if(!searchQuery.value) return users.value
        const query = searchQuery.value.toLowerCase()
        return users.value.filter(user =>
            user.name.toLowerCase().includes(query)||
            user.email.toLowerCase().includes(query)
        )
     })

     const openModal = (user) =>{
        selectedUser.value = user
        showModal.value = true
     }

     const closeModal = () => {
        showModal.value = false
     }


    return {
        users,
        loading,
        error,
        searchQuery,
        selectedUser,
        showModal,
        fetchUsers,
        filteredUsers,
        openModal,
        closeModal
    }

    
})