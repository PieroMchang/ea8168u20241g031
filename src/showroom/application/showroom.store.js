/**
 * @summary Showroom State Management with API and Assembler
 * @author Piero Francisco Montes Chang
 */
import { defineStore } from 'pinia';
import { ShowroomApi } from '../infrastructure/showroom.api.js';
import { ShowroomSectionAssembler } from '../infrastructure/showroom-section.assembler.js';
import { VehicleInventoryItemAssembler } from '../infrastructure/vehicle-inventory-item.assembler.js';

const api = new ShowroomApi();

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
            const res = await api.getSections();
            this.sections = ShowroomSectionAssembler.toEntitiesFromResponse(res);
        },
        async fetchItems() {
            const res = await api.getItems();
            this.items = VehicleInventoryItemAssembler.toEntitiesFromResponse(res);
        },
        async createItem(itemData) {
            await api.createItem(itemData);
            await this.fetchItems();
        }
    }
});