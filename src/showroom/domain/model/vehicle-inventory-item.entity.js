export class VehicleInventoryItem {
    constructor({ id, sectionId, vehicleCategoryId, vehicleId, vehicleName, quantity, registeredAt }) {
        this.id = id;
        this.sectionId = sectionId;
        this.vehicleCategoryId = vehicleCategoryId;
        this.vehicleId = vehicleId;
        this.vehicleName = vehicleName;
        this.quantity = quantity;
        this.registeredAt = registeredAt;
    }
}