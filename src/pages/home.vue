<script setup>
import HeaderComponent from '../components/Home/HomeHeader.vue'
import Section from '../components/Home/section.vue'
import Section1 from '../components/Home/section2.vue';
import Section2 from '../components/Home/section3.vue';
import Section3 from '../components/Home/section4.vue';
import SkeletonWrapper from '../components/common/SkeletonWrapper.vue'
import MyModal from "../components/Modal.vue"

import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 7000)
})
</script>

<template>
  
  <div>
    <SkeletonWrapper :loading="isLoading">
       <HeaderComponent />
    </SkeletonWrapper>
   

    <SkeletonWrapper :loading="isLoading">
      <Section />
    </SkeletonWrapper>

    <br><br>

    <SkeletonWrapper :loading="isLoading">
      <Section1 />
    </SkeletonWrapper>

    <br><br>

    <SkeletonWrapper :loading="isLoading">
      <Section2 />
    </SkeletonWrapper>

    <br><br>

    <SkeletonWrapper :loading="isLoading">
      <Section3 />
    </SkeletonWrapper>

    <br><br>
  </div>
</template>
