/**
 * @summary Vehicles External API Store
 * @author Piero Francisco Montes Chang
 */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useVehiclesStore = defineStore('vehicles', {
    state: () => ({
        externalVehicles: []
    }),
    actions: {
        async fetchVehicles() {
            const res = await axios.get(`${import.meta.env.VITE_EXTERNAL_API_BASE_URL}${import.meta.env.VITE_VEHICLES_ENDPOINT_PATH}`);
            this.externalVehicles = res.data.products;
        }
    }
});