<script setup>
import { shallowRef, ref } from 'vue'
import MyModal from "./components/Modal.vue"

const isSubscriber = shallowRef(false)
const modalActive = ref(false)
const navOpen = ref(false)

function showModal() { modalActive.value = true }
function closeModal() { modalActive.value = false }
function toggleNav() { navOpen.value = !navOpen.value }
</script>

<template>
<v-app>
  <!-- App Bar -->
  <v-app-bar flat class="px-6 app-bar">
    <!-- Left -->
    <div class="app-bar-left">
      <v-app-bar-title class="font-bold">XURYA</v-app-bar-title>
    </div>

    <!-- Center Nav (desktop only) -->
    <nav class="app-bar-center desktop-only">
      <v-btn text to="/" class="nav-link">Home</v-btn>
      <v-btn text to="/about" class="nav-link">About</v-btn>
      <v-btn text to="/contact" class="nav-link">Contact</v-btn>
    </nav>

    <!-- Right (desktop & hamburger for mobile) -->
    <div class="app-bar-right">
      <!-- Desktop buttons -->
      <v-btn border="thin" @click="showModal" class="desktop-btn">Login</v-btn>
      <v-btn
        :color="isSubscriber ? 'success' : 'primary'"
        variant="flat"
        @click="isSubscriber = !isSubscriber"
        class="desktop-btn"
      >
        {{ isSubscriber ? 'I Touch' : 'Get In Touch' }}
      </v-btn>

      <!-- Hamburger only on mobile -->
      <v-btn class="hamburger" @click="toggleNav">
        <span>{{ navOpen ? '✖' : '☰' }}</span>
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile Sidebar Menu -->
  <transition name="slide">
    <div v-if="navOpen" class="mobile-sidebar">
      <v-btn text to="/" class="mobile-link" @click="navOpen=false">Home</v-btn>
      <v-btn text to="/about" class="mobile-link" @click="navOpen=false">About</v-btn>
      <v-btn text to="/contact" class="mobile-link" @click="navOpen=false">Contact</v-btn>
      <v-btn border="thin" class="mobile-btn" @click="showModal">Login</v-btn>
      <v-btn
        class="mobile-btn"
        :color="isSubscriber ? 'success' : 'primary'"
        variant="flat"
        @click="isSubscriber = !isSubscriber"
      >
        {{ isSubscriber ? 'I Touch' : 'Get In Touch' }}
      </v-btn>
    </div>
  </transition>

  <!-- Overlay -->
  <div v-if="navOpen" class="overlay" @click="navOpen=false"></div>

  <!-- Main Content -->
  <v-main>
    <router-view class="p-6" />

    <MyModal :modalActive="modalActive" @update:modalActive="modalActive = $event">
      <v-card class="mx-auto modal-card">
        <v-card-title class="text-h6 justify-center">Login</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" placeholder="Enter username" dense outlined class="mb-4" />
            <v-text-field label="Password" placeholder="Enter password" type="password" dense outlined />
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-between">
          <v-btn text color="grey" @click="modalActive = false">Cancel</v-btn>
          <v-btn color="success" @click="modalActive = false">Login</v-btn>
        </v-card-actions>
      </v-card>
    </MyModal>
  </v-main>

  <!-- Footer -->
  <v-footer class="footer pa-6">
    <v-container class="footer-top">
      <div class="fr">
        <h1>Its time to support zero pollution, With renewable resources</h1>
      </div>
      <div class="fl">
        <span>
          By increasing the effectiveness and efficiency of electricity use, the use of renewable resources is very profitable for all industrial services
        </span>
        <v-btn class="footer-btn">Get In Touch</v-btn>
      </div>
    </v-container>

    <div class="footer-bottom">
      <h1>Xurya</h1>
      <nav class="footer-nav">
        <v-btn class="footer-link">Home</v-btn>
        <v-btn class="footer-link">About</v-btn>
        <v-btn class="footer-link">Contact</v-btn>
      </nav>
      <div class="social">
        <v-btn text>LinkedIn</v-btn>
        <v-btn text>Facebook</v-btn>
        <v-btn text>Instagram</v-btn>
      </div>
    </div>
  </v-footer>
</v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
* { font-family: 'Poppins', sans-serif; }


.modal-card {
  width: 100%;           /* full width on small screens */
  max-width: 480px;      /* max width for desktop */
  padding: 1.5rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .modal-card {
    max-width: 90%;      /* responsive width on mobile */
  }
}

/* Navbar */
.app-bar { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; }
.app-bar-left { flex: 1; }
.app-bar-center { display: flex; gap: 1.5rem; justify-content: center; flex: 2; flex-wrap: wrap; }
.app-bar-right { flex: 1; display: flex; gap: 1rem; justify-content: flex-end; flex-wrap: wrap; }
.nav-link { font-weight: 500; text-decoration: none; transition: all 0.2s ease-in-out; }
.nav-link:hover { color: #4caf50; }

/* Hamburger */
.hamburger {
  display: none;
  width: 40px;
  height: 40px;
  background-color: #4caf50;
  color: white;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}
.hamburger:hover { background-color: #43a047; }
.desktop-only { display: flex; }
.desktop-btn { display: inline-flex; }

/* Mobile Sidebar */
.mobile-sidebar {
  position: fixed;
  top: 3rem;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fcfbfb;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1001;
}
.mobile-link, .mobile-btn { color: black; text-align: left; width: 100%; }
.mobile-link:hover, .mobile-btn:hover {
  color: #4caf50;
}
/* Overlay */
.overlay {
  position: fixed;
  top: 0; left: 0; right:0; bottom:0;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
}

/* Slide animation */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from { transform: translateX(-100%); }
.slide-enter-to { transform: translateX(0); }
.slide-leave-from { transform: translateX(0); }
.slide-leave-to { transform: translateX(-100%); }

/* Footer fix */
.footer {
  background-color: black !important; /* Ensure background stays black */
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
}
.footer-top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
.footer-top h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.footer-top span { display: block; max-width: 400px; }
.footer-btn { margin-top: 1rem; }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.footer-nav { display: flex; gap: 1rem; flex-wrap: wrap; }
.footer-link { color: white; text-decoration: none; background: none; }
.social { display: flex; gap: 0.5rem; flex-wrap: wrap; }

/* Responsive */
@media (max-width: 1024px) {
  .desktop-only { display: none; }
  .desktop-btn { display: none; }
  .hamburger { display: flex; }
  .footer-top, .footer-bottom { flex-direction: column; align-items: center; text-align: center; }
  .footer-top span { max-width: 100%; }
}
</style>
