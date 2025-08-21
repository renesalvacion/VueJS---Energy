<script setup>
import { shallowRef } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animate only once
  })
})

const isSubscriber = shallowRef(false)

const sectionCards = [
  { title: "Solar panels for home", details: "View Details" },
  { title: "Solar panels for industry", details: "View Details" },
  { title: "Solar panels for chargers", details: "View Details" },
  { title: "Solar panels for generator", details: "View Details" },
]
</script>

<template>
  <v-container fluid class="section4">
    <!-- Left Text + Cards -->
    <v-row class="align-center" justify="space-between">
      <v-col cols="12" lg="6">
        <div class="text-section">
          <h1 data-aos="fade-down">
            Trusted service, for your <br> various needs
          </h1>
          <v-fade-transition mode="out-in">
            <v-btn
              data-aos="fade-right"
              :key="`info-${isSubscriber}`"
              :color="isSubscriber ? 'success' : 'primary'"
              variant="flat"
              @click="isSubscriber = !isSubscriber"
            >
              {{ isSubscriber ? 'I Touch' : 'Get In Touch' }}
            </v-btn>
          </v-fade-transition>
        </div>

       <v-row dense class="mt-6" justify="start" align="stretch">
  <v-col
    v-for="(card, i) in sectionCards"
    :key="i"
    cols="6"   
    sm="6"    
    md="6"    
  >
    <v-card class="pa-6 card-item" data-aos="fade-up">
      <p class="card-index">0{{ i + 1 }}</p>
      <h3>{{ card.title }}</h3>
      <a href="#">{{ card.details }}</a>
    </v-card>
  </v-col>
</v-row>

      </v-col>

      <!-- Right Image -->
      <v-col cols="12" lg="6" class="image-col" data-aos="fade-left">
        <img src="../../assets/nature.avif" alt="Solar Panel" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.section4 {
  display: flex;
  justify-content: center; /* center horizontally */
  padding: 2rem;
  flex-wrap: wrap; /* allow wrapping on small screens */
}

.v-row {
  justify-content: center; /* ensure v-row content is centered */
}

.text-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* center text and button */
}

.text-section h1 {
  color: black;
  letter-spacing: 0.3rem;
  font-size: clamp(1.5rem, 6vw, 2.5rem); /* scales between 1.5rem and 2.5rem */
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.2;
}

.card-item h3 {
  font-size: clamp(1rem, 4vw, 1.5rem);
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.card-item a {
  font-size: clamp(0.8rem, 3vw, 1rem);
}


.image-col img {
  display: block;
  margin: 2rem auto 0 auto; /* center image */
  border-radius: 2rem;
  max-width: 100%;
  height: auto;
}

/* Cards remain as-is, just ensure centered in their row */
.v-row.dense {
  justify-content: center;
}
</style>
