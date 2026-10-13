
/**
 * @summary Showroom Section Entity
 * @author Piero Francisco Montes Chang
 */
export class ShowroomSection {
    constructor({ id, name, vehicleCategory, maxCapacity }) {
        this.id = id;
        this.name = name;
        this.vehicleCategory = vehicleCategory;
        this.maxCapacity = maxCapacity;
    }
}