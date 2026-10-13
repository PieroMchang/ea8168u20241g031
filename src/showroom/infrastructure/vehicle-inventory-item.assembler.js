/**
 * @summary Vehicle Inventory Item Assembler
 * @author Piero Francisco Montes Chang
 */
import { VehicleInventoryItem } from '../domain/model/vehicle-inventory-item.entity.js';

export class VehicleInventoryItemAssembler {
    static toEntityFromResource(resource) {
        return new VehicleInventoryItem(resource);
    }
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) return [];
        return response.data.map(r => this.toEntityFromResource(r));
    }
}