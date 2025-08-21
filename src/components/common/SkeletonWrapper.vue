<script setup>
import { ContentLoader } from 'vue-content-loader'

const props = defineProps({
  loading: { type: Boolean, default: true },
  height: { type: Number, default: 1000 },
  width: { type: Number, default: 1000 }
})
</script>

<template>
  <div>
    <div v-if="props.loading">
      <!-- Skeleton Placeholder -->
      <ContentLoader :height="props.height" :width="props.width" :speed="2" style="display: flex; justify-content: center;">
        <rect x="0" y="0" rx="5" ry="5" :width="props.width" height="20" />
        <rect x="0" y="40" rx="5" ry="5" :width="props.width" height="20" />
        <rect x="0" y="80" rx="5" ry="5" :width="props.width" height="20" />
      </ContentLoader>
    </div>

    <!-- Show actual content when not loading -->
    <div v-else>
      <slot />
    </div>
  </div>
</template>
