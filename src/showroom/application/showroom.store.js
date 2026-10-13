/**
 * @summary Showroom State Management
 * @author Piero Francisco Montes Chang
 */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useShowroomStore = defineStore('showroom', {
    state: () => ({
        sections: [],
        items: []
    }),
    getters: {
        sectionDetails: (state) => {
            return state.sections.map(section => {
                const sectionItems = state.items.filter(item => item.sectionId === section.id);
                const totalVehicles = sectionItems.reduce((acc, item) => acc + item.quantity, 0);
                return {
                    ...section,
                    items: sectionItems,
                    totalVehicles,
                    availableCapacity: section.maxCapacity - totalVehicles
                };
            });
        }
    },
    actions: {
        async fetchSections() {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_SHOWROOM_SECTIONS_ENDPOINT_PATH}`);
            this.sections = res.data;
        },
        async fetchItems() {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH}`);
            this.items = res.data;
        },
        async createItem(itemData) {
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH}`, itemData);
            await this.fetchItems();
        }
    }
});