<template>
  <div class="layout-wrapper">
    <pv-toolbar class="bg-primary text-white p-3 shadow-2">
      <template #start>
        <img :src="logoUrl" alt="Astara Logo" height="40" class="mr-3" />
        <h2 class="m-0">{{ $t('toolbar.title') }}</h2>
      </template>
      <template #end>
        <pv-button icon="pi pi-bars" @click="drawerVisible = true" severity="secondary" />
      </template>
    </pv-toolbar>

    <pv-drawer v-model:visible="drawerVisible" header="Menu">
      <div class="flex flex-column h-full justify-content-between">
        <div class="flex flex-column gap-2 mt-4">
          <pv-button :label="$t('sidebar.home')" icon="pi pi-home" class="p-button-text text-left" @click="goTo('/home')" />
          <pv-button :label="$t('sidebar.new')" icon="pi pi-plus" class="p-button-text text-left" @click="goTo('/vehicle/items/new')" />
        </div>
        <div class="flex justify-content-center gap-3 mb-4">
          <pv-button label="EN" @click="$i18n.locale = 'en'" class="p-button-outlined" />
          <pv-button label="ES" @click="$i18n.locale = 'es'" class="p-button-outlined" />
        </div>
      </div>
    </pv-drawer>

    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
/**
 * @summary Main Layout Application Component
 * @author Piero Francisco Montes Chang
 */
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawerVisible = ref(false);
const router = useRouter();
const logoUrl = import.meta.env.VITE_LOGO_API_URL;

const goTo = (path) => {
  router.push(path);
  drawerVisible.value = false;
};
</script>