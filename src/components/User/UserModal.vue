<template>
    <div class="modal fade show" tabindex="-1" style="display: block; background-color:rgba(0,0,0,0.5);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title">Detalles de Usuario</h1>
                    <button type="button" class="btn-close" @click="$emit('close')"></button>
                </div>
                <div class="modal-body">
                    <div v-if="user" class="row" >
                        <div class="col-12 mb-3">
                            <p><strong>Nombre:</strong> {{ user.name }}</p>
                            <p><strong>Email: </strong> {{ user.email }}</p>
                            <p><strong>Telefono:</strong> {{ user.phone }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="$emit('close')"
                    >Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    user: {
        type: Object,
        default: null
    }
})

defineEmits(['close'])
</script>