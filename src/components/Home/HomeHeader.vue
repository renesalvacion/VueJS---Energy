<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})
</script>

<template>
  <v-container fluid>
    <!-- Hero Section -->
    <header class="hero-header">
      <div class="hero-bg"></div>  <!-- background image -->
      <div class="txt" data-aos="fade-right">
        <p>#1 Energy provider in the world</p>
        <h3>New Energy</h3>
        <h3>for the Future</h3>

        <div class="header_button" data-aos="fade-right">
          <v-btn class="mr-4">Get In Touch</v-btn>
          <v-btn outlined>Our Services</v-btn>
        </div>
      </div>
    </header>

    <!-- Info Box -->
    <div class="box">
      <div class="txt_bg" data-aos="fade-up">
        <div class="t1">
          <h4>6 mil</h4>
          <p>the company's <br> annual net income</p>
        </div>
        <div class="t2">
          <h4>315</h4>
          <p>Projects completed <br> worldwide</p>
        </div>
        <div class="t3">
          <h4>120k</h4>
          <p>Employees work in all <br> parts of the world</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
* { font-family: 'Poppins', sans-serif; }

/* Hero Section */
.hero-header {
  position: relative;
  height: 80vh;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url("../../assets/nature.avif") no-repeat center center;
  background-size: cover;
  filter: brightness(0.3) contrast(0.9);
  z-index: 0;
}

.txt {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.txt p {
  color: white;
  font-size: clamp(1rem, 2vw, 2rem);
  margin: 0.2rem 0;
}

.txt h3 {
  color: white;
  font-size: clamp(2rem, 8vw, 6rem);
  letter-spacing: clamp(0.5rem, 3vw, 2rem);
  margin: 0.2rem 0;
}

.header_button {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.v-btn {
  background: none;
  color: white;
  font-size: clamp(0.8rem, 2vw, 1rem);
  padding: 0.5rem 1rem;
}

.box {
  display: flex;
  justify-content: flex-end; /* aligns the content to the right */
  width: 100%;
  position: relative;
  top: -5rem; /* keep it slightly overlapping hero section */
  padding-right: 2rem; /* optional spacing from right edge */
}

.txt_bg {
  background: white;
  max-width: 41rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem;
  padding: 1rem;
  gap: 1rem;
}


.txt_bg h4 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin: 0;
}

.txt_bg p {
  font-size: clamp(0.9rem, 2vw, 1rem);
  margin: 0.2rem 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-header { height: 60vh; padding-left: 1.5rem; }
  .txt h3 { font-size: clamp(1.5rem, 6vw, 5rem); letter-spacing: clamp(0.3rem, 2vw, 1.5rem);}
  .txt_bg { flex-direction: column; align-items: flex-start; top: -3rem; gap: 0.5rem; }
}

@media (max-width: 768px) {
  .hero-header { height: 50vh; padding-left: 1rem; }
  .txt h3 { font-size: clamp(1.2rem, 5vw, 4rem); letter-spacing: normal; }
  .txt p { font-size: clamp(0.8rem, 2.5vw, 1.5rem); }
  .txt_bg { top: -2rem; }
}

/* Keep flex row till mobile */
@media (max-width: 1024px) {
  .txt_bg {
    flex-direction: row; /* <-- row instead of column */
    align-items: center;
    top: -3rem;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .txt_bg {
    flex-direction: column; /* switch to column only on small mobile */
    align-items: flex-start;
    top: -2rem;
    gap: 0.5rem;
  }
}
</style>
