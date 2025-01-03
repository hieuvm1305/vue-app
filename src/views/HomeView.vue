<script setup>
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";

const count_number = ref(0);

function setCountValue() {
  console.log("Count value set to:", count_number.value);
}
</script>

<template>
  <div class="flex items-center">
    <div>test</div>
    <InputNumber v-model="count_number" />
    <Button @click="setCountValue()" severity="secondary" label="Set Value" />
  </div>
</template>
