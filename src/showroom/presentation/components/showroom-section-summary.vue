<template>
  <pv-card class="h-full shadow-3 border-round-xl">
    <template #title>
      <div class="text-xl font-bold">{{ section.name }}</div>
    </template>
    <template #content>
      <ul v-if="section.items.length > 0" class="list-none p-0 m-0">
        <li v-for="item in section.items" :key="item.id" class="border-bottom-1 surface-border py-2 flex justify-content-between">
          <span class="font-medium">{{ item.vehicleName }}</span>
          <span class="text-gray-600">Qty: {{ item.quantity }}</span>
        </li>
      </ul>
      <p v-else class="text-gray-500 font-italic m-0 py-2">{{ $t('card.empty') }}</p>
    </template>
    <template #footer>
      <div class="flex flex-column gap-2 mt-2 pt-3 border-top-1 surface-border">
        <div class="flex justify-content-between">
          <span class="font-bold">{{ $t('card.total') }}:</span>
          <span>{{ section.totalVehicles }}</span>
        </div>
        <div class="flex justify-content-between">
          <span class="font-bold">{{ $t('card.capacity') }}:</span>
          <span :class="{'text-red-500 font-bold': section.availableCapacity === 0}">{{ section.availableCapacity }}</span>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<script setup>
/**
 * @summary Showroom Section Summary Card Component
 * @author Piero Francisco Montes Chang
 */
defineProps({
  section: { type: Object, required: true }
});
</script>