<script setup>
import { useToast } from "primevue";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";
import Toast from 'primevue/toast';
const count_number = ref(0);
const toast = useToast()
function setCountValue() {
  console.log("Count value set to:", count_number.value);
}
const show = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div>test</div>
    <p>2</p>
    <div>3</div>
    <p>{{ $t('hello') }}</p>
    <InputNumber v-model="count_number" />
    <Button @click="setCountValue()" severity="secondary" label="Set Value" />
    <Button @click="show()" severity="secondary" label="Call Toast" />
  </div>
  <Toast />
</template>
