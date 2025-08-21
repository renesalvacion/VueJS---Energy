<script setup>
import { mdiDomain , mdiXmpp , mdiSkullScanOutline , mdiMicrosoftXbox , mdiExcavator } from '@mdi/js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

const items = [
  { icon: mdiDomain, Content: "Trend" },
  { icon: mdiXmpp, Content: "Tella Cygate" },
  { icon: mdiSkullScanOutline, Content: "Business" },
  { icon: mdiMicrosoftXbox, Content: "HeadSpace" },
  { icon: mdiExcavator, Content: "Medtronic" }
]

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  })
})
</script>

<template>
  <div class="sec2_des">
    <div class="sec">
      <div class="sec1" data-aos="fade-right">
        <h1 class="anime-text">Focus on quality, we</h1>
        <h1>Main customer trust</h1>
      </div>
      <div class="sec2" data-aos="fade-left">
        <p>
          We ensure that every installation we build has strict quality checks. 
          Sustainable solutions for an environmentally friendly and renewable future
        </p>
      </div>
    </div>

    <div class="card_circle" data-aos="fade-up">
      <div class="c1" v-for="item in items" :key="item.Content">
        <v-icon :size="36" class="mr-2 icons">
          <svg viewBox="0 0 24 24" class="icon-svg">
            <path :d="item.icon" fill="currentColor" />
          </svg>
        </v-icon>
        <h3>{{ item.Content }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Section styling */
.sec2_des {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sec {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.sec1 h1 {
  font-size: 2.5rem;
  margin: 0.2rem 0;
}

.sec2 p {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 500px;
}

/* Circle cards */
.card_circle {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

/* Individual circle card */
.c1 {
  flex: 1 1 calc(50% - 1rem); /* 2 per row, account for gap */
  max-width: 12rem; /* maintain max size */
  height: 12rem;
  border-radius: 50%;
  background: #e9ebec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  text-align: center;
  transition: transform 0.3s, background 0.3s, color 0.3s;
}


/* Icon sizing inside circle card */
.c1 .v-icon {
  font-size: clamp(1.5rem, 4vw, 2rem); /* responsive scaling */
  margin-bottom: 0.5rem;
}

/* Card text */
.c1 h3 {
  font-size: clamp(0.8rem, 3vw, 1rem);
  word-break: break-word;
}

/* Hover effect */
.c1:hover {
  transform: scale(1.05);
  cursor: pointer;
  background: white;
  color: rgb(139, 245, 139);
}


.anime-text span {
  display: inline-block;
  animation: fadeIn 0.5s forwards;
}

/* Responsive styling */
@media (max-width: 1024px) {
  .sec {
    justify-content: center;
  }
  .sec1 h1 {
    font-size: 2rem;
    text-align: center;
  }
  .sec2 p {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .sec1 h1 {
    font-size: 1.5rem;
  }
  .c1 {
    width: 10rem;
    height: 10rem;
  }
  .sec2 p {
    font-size: 0.9rem;
  }
    .c1 .v-icon {
    font-size: 1.5rem;
  }
  .c1 h3 {
    font-size: 0.8rem;
  }
}
</style>
