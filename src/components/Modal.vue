<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({ modalActive: Boolean })
const emit = defineEmits(['update:modalActive'])

function closeModal() {
  emit('update:modalActive', false)
}
</script>

<template>
  <div v-if="modalActive" class="modal-overlay">
    <!-- Overlay -->
    <div class="overlay" @click="closeModal"></div>

    <!-- Modal content -->
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* Full screen overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  display: flex;           
  align-items: center;     
  justify-content: center; 
}

/* Dark semi-transparent overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Card wrapper */
.modal-content {
  position: relative; 
  z-index: 1;

  /* Remove white if using v-card inside */
  background: transparent; 
  border-radius: 12px;
  
  box-shadow: none; 
}
</style>
