<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';
import UserModal from './UserModal.vue';

const userStore = useUserStore()
userStore.fetchUsers()
</script>

<template>
    <div>
        <div class="row mb-4">
            <div class="col-mb-6 mx-auto">
                <input v-model="userStore.searchQuery"
                 type="text"
                 class="form-control"
                 placeholder="Buscar por nombre o email"/>
            </div>
        </div>
    

    <div v-if="userStore.loading" class="text-center">
        <div class="spinner-border text-primary" role="status" >
            <span class="visually-hidden">Cargando</span>
        </div>
    </div>

    <div v-else-if="userStore.error" class="alert alert-danger">
        Error: {{ userStore.error }}
    </div>

    <div v-else class="table-responsive">
        <table class="table table-striped table-hover">
                  <thead class="table-dark">
                      <tr>
                          <th>Nombre</th>
                          <th>Email</th>
                          <th>Telefono</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
        
         

              <tbody>
                  <tr v-for="user in userStore.filteredUsers" :key="user.id">
                     <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.phone }}</td>
                     <td>
                   <button @click="userStore.openModal(user)"
                class="btn btn-primary btn-sm">Ver detalles</button>
                   </td>
                   </tr> 
                </tbody>   
           </table> 
        
       </div>

       <UserModal
         v-if="userStore.showModal"
         :user="userStore.selectedUser"
         @close="userStore.closeModal"
       />
       
    </div>
</template>