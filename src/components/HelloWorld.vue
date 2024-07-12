<template>
  <div class="hello">
    {{ state.count }}
    {{ state.checkCount }}
  </div>
  <button @click="increment">increment</button>
  <button @click="decrement">decrement</button>
</template>

<script>
//import { ref } from "vue"
import { computed, reactive,watch, watchEffect } from "vue"
export default {
  name: "HelloWorld",
  //setup hiya li kat executa fach la page katcharga
  setup() {
    // ref hiya katkhalik t3aml m3a single values reactive hiya l contrire dyl ref 7t kikon fiha bzaf dyal les valueres ama ref katkon 3andha ghir valuer w7da
    // let count = ref(0);
   const state=reactive({
    count:0,
    checkCount:computed(()=>state.count>10?"exellent":"faible")

   })
    function increment() {
      // khask dir .value bach i 9dar i incrementi lik ou l value rah hiya dik 0
      state.count += 1;
    }

    function decrement() {
      state.count -= 1;
    }
    // had watchhiya function kat3tiha chno khasha tra9b(controler) wa7d l9ima
   //comme hna ghadi tcontroli liya lcount 9ima L9dima ou jdida dalha
    watch(()=>state.count,(count,prevcount)=>{
    console.log(count,prevcount)
    })
    // watchEffect katb9a kat executa kol mara w93 chi taghyir fi wa7d l9ima
    watchEffect(()=>{
      console.log(state.count);
    })
    return {
      //count,
      increment, // Expose the increment function to the template
      decrement, // Expose the decrement function to the template
     // hna ila bghity tsayft count farah ghatsayftha f b state
      state
    }

  }
};
</script>

