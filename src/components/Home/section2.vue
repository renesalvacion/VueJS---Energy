<script setup>
import { mdiLayers, mdiQualityHigh, mdiMessageBadgeOutline, mdiBookAccount, mdiPackageCheck, mdiRobot } from '@mdi/js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ref, onMounted } from 'vue'
import Typewriter from "t-writer.js"

const target = ref(null)

const cardContent = [
  {icon: mdiLayers, title: "Layered Security", content: "With layered security, we ensure the safety of every unit we provide"},
  {icon: mdiQualityHigh, title: "Quality control of each part", content: "Every unit you send is checked carefully for every detail."},
  {icon: mdiMessageBadgeOutline, title: "Reliable Customer Service", content: "Our customer service is available 24 hours a week, with qualified people"},
  {icon: mdiBookAccount, title: "Maintenance manual book", content: "We provide a guidebook that can be used to ensure maximum care"},
  {icon: mdiPackageCheck, title: "Delivered safely", content: "Every unit we send arrives safely and quickly, without any obstacles or drama"},
  {icon: mdiRobot, title: "Based on artificial intelligence", content: "You can control and view each unit from your phone, it's very easy to use", color:"yellowgreen"},
]

onMounted(() => {
  const writer = new Typewriter(target.value, {
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 15,
    cursorClassName: "cursor",
  })

  writer
    .type("We offer quality, with the best materials and service")
    .rest(1000)
    .clear()
    .type("And we care about security and AI innovation")
    .rest(1500)
    .clear()
    .start()

  AOS.init({
    duration: 1000,
    once: true,
  })
})
</script>

<template>
  <div class="section3">
    <!-- Typewriter -->
    <div class="typewriter-wrapper" data-aos="fade-up">
      <h1 ref="target"></h1>
    </div>

    <!-- Cards -->
    <v-container fluid class="cards_section" data-aos="fade-up">
      <v-row dense justify="center" align="stretch" class="custom-grid">
      <v-col
          v-for="(card, index) in cardContent"
          :key="index"
          cols="6"   
          sm="6"     
          md="4"     
        >

          <v-card class="mx-auto card-item" outlined>
            <v-card-title class="d-flex flex-column align-center justify-center text-center">
              <v-icon :size="36" class="mb-2">
                <svg viewBox="0 0 24 24">
                  <path :d="card.icon" :fill="card.color || '#9ACD32'" />
                </svg>
              </v-icon>
              <span class="font-weight-bold">{{ card.title }}</span>
            </v-card-title>
            <v-card-text class="text-center">
              {{ card.content }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.section3 {
  background: #e9ebec;
  width: 100%;
  padding: 3rem 1rem;
}

.typewriter-wrapper {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  word-break: break-word;
}
/* Typewriter */
.typewriter-wrapper h1 {
  font-size: clamp(1.2rem, 5vw, 2.5rem); /* scales from 1.2rem to 2.5rem */
  line-height: 1.2;
  letter-spacing: 0.05rem;
  text-align: center;
  word-break: break-word;
}
.cursor {
  display: inline-block;
  width: 2px;
  background: black;
  margin-left: 2px;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.cards_section {
  width: 100%;
}

.card-item {
  height: 14rem; /* allow dynamic height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}


.card-item .v-card-title span {
  font-size: clamp(0.9rem, 2.5vw, 1.2rem); /* responsive title */
  word-break: break-word;
}

.card-item .v-card-text {
  font-size: clamp(0.75rem, 2vw, 1rem); /* responsive content */
  word-break: break-word;
  line-height: 1.4;
}

.custom-grid .v-row {
  row-gap: 1.5rem !important;
  column-gap: 1.5rem !important;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .card-item {
    height: auto;
  }
}

@media (max-width: 640px) {
    .typewriter-wrapper h1 {
    font-size: clamp(1rem, 6vw, 1.8rem);
    letter-spacing: 0.03rem;
  }
  .card-item {
    height: 11rem;
  }
}
</style>
