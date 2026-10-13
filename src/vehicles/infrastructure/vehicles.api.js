import axios from 'axios';

export class VehiclesApi {
    getVehicles() {
        return axios.get(`${import.meta.env.VITE_EXTERNAL_API_BASE_URL}${import.meta.env.VITE_VEHICLES_ENDPOINT_PATH}`);
    }
}