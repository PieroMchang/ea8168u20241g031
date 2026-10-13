<template>
  <div class="max-w-30rem mx-auto p-4">
    <h1 class="text-3xl font-bold mb-2">{{ $t('form.title') }}</h1>
    <p class="text-gray-600 mb-5">{{ $t('form.subtitle') }}</p>

    <pv-card class="shadow-2">
      <template #content>
        <form @submit.prevent="submitForm" class="flex flex-column gap-4">

          <div class="flex flex-column gap-2">
            <label for="sectionId" class="font-bold">{{ $t('form.section') }}</label>
            <pv-select id="sectionId" v-model="form.sectionId" :options="showroomStore.sectionDetails" optionLabel="name" optionValue="id" placeholder="Select Section" class="w-full" required />
          </div>

          <div class="flex flex-column gap-2">
            <label for="vehicleId" class="font-bold">{{ $t('form.vehicle') }}</label>
            <pv-select id="vehicleId" v-model="selectedVehicle" :options="vehiclesStore.externalVehicles" optionLabel="title" placeholder="Select Vehicle" class="w-full" required />
          </div>

          <div class="flex flex-column gap-2">
            <label for="quantity" class="font-bold">{{ $t('form.quantity') }}</label>
            <pv-input-number id="quantity" v-model="form.quantity" :min="1" :max="availableCap" class="w-full" required />
            <small v-if="selectedSectionId" class="text-blue-500 font-medium">Available capacity: {{ availableCap }}</small>
          </div>

          <div class="flex justify-content-end gap-3 mt-4">
            <pv-button :label="$t('form.cancel')" severity="secondary" @click="cancel" />
            <pv-button :label="$t('form.create')" type="submit" :disabled="!isValid" severity="success" />
          </div>
        </form>
      </template>
    </pv-card>
  </div>
</template>

<script setup>
/**
 * @summary New Vehicle Inventory Item Form View
 * @author Piero Francisco Montes Chang
 */
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useShowroomStore } from '../../application/showroom.store.js';
import { useVehiclesStore } from '../../../vehicles/application/vehicles.store.js';

const router = useRouter();
const showroomStore = useShowroomStore();
const vehiclesStore = useVehiclesStore();

const form = ref({ sectionId: null, quantity: null });
const selectedVehicle = ref(null);

const selectedSectionId = computed(() => form.value.sectionId);

const availableCap = computed(() => {
  if (!selectedSectionId.value) return 0;
  const section = showroomStore.sectionDetails.find(s => s.id === selectedSectionId.value);
  return section ? section.availableCapacity : 0;
});

const isValid = computed(() => {
  return form.value.sectionId && selectedVehicle.value && form.value.quantity > 0 && form.value.quantity <= availableCap.value;
});

onMounted(async () => {
  await showroomStore.fetchSections();
  await showroomStore.fetchItems();
  await vehiclesStore.fetchVehicles();
});

const submitForm = async () => {
  if (!isValid.value) return;

  const newItem = {
    sectionId: form.value.sectionId,
    vehicleCategoryId: selectedVehicle.value.category,
    vehicleId: selectedVehicle.value.id,
    vehicleName: selectedVehicle.value.title,
    quantity: form.value.quantity,
    registeredAt: new Date().toISOString()
  };

  await showroomStore.createItem(newItem);
  router.push('/home');
};

const cancel = () => {
  router.push('/home');
};
</script>