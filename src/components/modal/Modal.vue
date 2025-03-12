<script setup>
import { ref } from 'vue';
const props = defineProps(['open'])
const emit = defineEmits(['close'])

</script>
<template>
    <div class="modal-overlay">
        <div class="modal-container" @click.stop>

        </div>
    </div>
</template>
<style scoped>
.modal-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    margin-top: -8em;
    min-width: 20em;
    min-height: 12em;
    padding: 2.2em;
    z-index: 105;
    background-color: white;
    border: 1px solid var(--clr-secondary-purple);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
</style>