import { defineStore } from "pinia";

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    setValue(value) {
      this.count = value;
    },
  },
});
