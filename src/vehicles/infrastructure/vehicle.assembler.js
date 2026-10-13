/**
 * @summary Vehicle Assembler
 * @author Piero Francisco Montes Chang
 */
import { Vehicle } from '../domain/model/vehicle.entity.js';

export class VehicleAssembler {
    static toEntityFromResource(resource) {
        return new Vehicle(resource);
    }
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) return [];
        return response.data.products.map(r => this.toEntityFromResource(r));
    }
}