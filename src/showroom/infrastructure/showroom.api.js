/**
 * @summary Showroom API Service
 * @author Piero Francisco Montes Chang
 */
import { http } from '../../shared/infrastructure/base-api.js';

export class ShowroomApi {
    getSections() {
        return http.get(import.meta.env.VITE_SHOWROOM_SECTIONS_ENDPOINT_PATH);
    }
    getItems() {
        return http.get(import.meta.env.VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH);
    }
    createItem(data) {
        return http.post(import.meta.env.VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH, data);
    }
}