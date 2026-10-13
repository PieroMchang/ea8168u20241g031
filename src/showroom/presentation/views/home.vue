<template>
  <div class="p-4">
    <h1 class="text-4xl font-bold mb-2">{{ $t('home.title') }}</h1>
    <p class="text-xl text-gray-600 mb-6">{{ $t('home.subtitle') }}</p>

    <h2 class="text-2xl font-semibold mb-4">{{ $t('home.collections') }}</h2>

    <div class="grid">
      <div class="col-12 md:col-6 lg:col-4 p-2" v-for="section in store.sectionDetails" :key="section.id">
        <showroom-section-summary :section="section" />
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * @summary Home View
 * @author Piero Francisco Montes Chang
 */
import { onMounted } from 'vue';
import { useShowroomStore } from '../../application/showroom.store.js';
import ShowroomSectionSummary from '../components/showroom-section-summary.vue';

const store = useShowroomStore();

onMounted(async () => {
  await store.fetchSections();
  await store.fetchItems();
});
</script>