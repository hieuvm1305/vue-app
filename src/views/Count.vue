<template>
  <div>
    <Button label="Secondary" severity="secondary" raised />
    <div class="flex flex-row items-center">
      <div>This is count value:</div>
      <div clas="p-2">{{ count }}</div>
    </div>
    <div class="p-2">
      <div class="flex items-center">
        <div class="mr-2">Increment</div>
        <Button @click="increment" label="Tang" severity="secondary"></Button>
      </div>
      <div class="flex items-center">
        <div class="mr-2">Increment</div>
        <Button @click="decrement" severity="secondary">Giam</Button>
      </div>
      <div class="flex items-center">
        <InputNumber v-model="count_number"/>
        <Button @click="setCountValue()" severity="secondary">set value</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";

const countStore = useCounterStore();
const { count } = storeToRefs(countStore);
const { increment, decrement, setValue } = countStore;
const count_number = ref(0)
function setCountValue() {
    setValue(count_number.value)
}
</script>

<style lang="scss" scoped></style>
