<script setup>
import { useToast } from "primevue";
import Button from "primevue/button";
import Toast from 'primevue/toast';
const toast = useToast()
const show = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group:"bl" , life: 3000 });
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div>test</div>
    <p>{{ $t('hello') }}</p>
    <Button @click="show()" severity="secondary" label="Call Toast" />
  </div>
  <Toast position="bottom-left" group="bl" />
</template>
