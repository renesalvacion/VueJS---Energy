<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ref, onMounted } from 'vue'

// ✅ Import your asset properly
import NatureImg from '../../assets/nature.avif'

const activeSlide = ref(0) // ✅ track active slide

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animate only once
  })
})

// Define the slides array
const slides = [
  {
    title: 'Medtronic',
    content: 'We have used services from Xurya for most of our stations, this is our strategic step to continue to increase the number of solar panel usage for our stations, we are very satisfied with the services from Xurya',
    image: NatureImg,
    buttonText: "Learn More",
    buttonLink: "#medtronic"
  },
  {
    title: 'Tella Cygate',
    content: 'Housing in the future really needs clean and reliable energy sources, Xurya really helps us to continue developing our renewable energy',
    image: NatureImg,
    buttonText: "Learn More",
    buttonLink: "#medtronic"
  },
  {
    title: 'Tella Cygate',
    content: 'Housing in the future really needs clean and reliable energy sources, Xurya really helps us to continue developing our renewable energy',
    image: NatureImg,
    buttonText: "Learn More",
    buttonLink: "#medtronic"
  }
]

// ✅ update bullets when autoplay/drag happens
function onSlide(event) {
  activeSlide.value = event.currentSlide.index
}
</script>

<template>
  <br /><br /><br />
  <!-- Header -->
  <h1 data-aos="fade-down" class="slider-header">
    See how we solve <br>problems, right on target
  </h1>

  <div class="section5">
    <div class="slide_car" data-aos="fade-up">
      <vueper-slides
        autoplay
        :duration="3000"
        :bullets="false"
        :arrows="false"
        :infinite="true"
        bullet-class="line-bullet"
        @slide="onSlide"
      >
        <vueper-slide v-for="(slide, i) in slides" :key="i">
          <template #content>
            <div class="slide-layout">
              <!-- Left side text -->
              <div class="slide-text">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.content }}</p>
                <a :href="slide.buttonLink" class="slide-btn">
                  {{ slide.buttonText }}
                </a>
                <div class="cto">
                  <h3>Manahan Mana</h3>
                  <p>- CTO Hyung Motor</p>
                </div>
              </div>

              <!-- Right side image -->
              <div class="slide-img">
                <img :src="slide.image" alt="Slide Image" />
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>

      <!-- Custom bullets -->
      <div class="custom-bullets">
        <span
          v-for="(slide, i) in slides"
          :key="i"
          class="bullet"
          :class="{ active: activeSlide === i }"
          @click="activeSlide = i"
        ></span>
      </div>
    </div>
  </div>
  <br /><br /><br /><br />
</template>

<style scoped>
/* Header */
.slider-header {
  text-align: center;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  color: black;
  margin-bottom: 2rem;
}

/* Buttons */
.slide-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background: #4caf50;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;
}

.slide-btn:hover {
  background: #43a047;
}

/* Custom bullets */
.custom-bullets {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 8px;
}

.custom-bullets .bullet {
  width: 50px;
  height: 4px;
  border: 2px solid #33333341;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.3s;
}

.custom-bullets .bullet.active {
  background: rgb(130, 238, 130);
  border: none;
}

/* Slide layout */
.slide-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap; /* for smaller screens */
}

/* Slide text */
.slide-text {
  flex: 1;
  text-align: left;
  color: #111;
  min-width: 250px;
}

.slide-text h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.slide-text p {
  font-size: 1rem;
  color: #444;
}

.cto {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cto h3 {
  margin: 0;
}

.cto p {
  margin: 0;
}

/* Slide image */
.slide-img {
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 200px;
}

.slide-img img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

/* Slide container */
.slide_car {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 20rem;
  background: rgb(241, 240, 240);
  border-radius: 2rem;
  overflow: hidden;
  margin: 0 auto;
}

.section5 {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Responsive */
@media (max-width: 992px) {
  .slide-layout {
    flex-direction: column;
    text-align: center;
  }

  .slide-text {
    text-align: center;
  }

  .slide-img img {
    max-width: 300px;
  }
}

@media (max-width: 600px) {
  .slider-header {
    font-size: 1.8rem;
  }

  .slide-text h2 {
    font-size: 1.4rem;
  }

  .slide-text p {
    font-size: 0.9rem;
  }

  .slide-img img {
    max-width: 100%;
    height: auto;
  }

  .slide-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
