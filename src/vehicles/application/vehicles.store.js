/**
 * @summary Vehicles External API Store with Assembler
 * @author Piero Francisco Montes Chang
 */
import { defineStore } from 'pinia';
import { VehiclesApi } from '../infrastructure/vehicles.api.js';
import { VehicleAssembler } from '../infrastructure/vehicle.assembler.js';

const api = new VehiclesApi();

export const useVehiclesStore = defineStore('vehicles', {
    state: () => ({
        externalVehicles: []
    }),
    actions: {
        async fetchVehicles() {
            const res = await api.getVehicles();
            this.externalVehicles = VehicleAssembler.toEntitiesFromResponse(res);
        }
    }
});