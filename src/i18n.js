/**
 * @summary Internationalization Configuration
 * @author Piero Francisco Montes Chang
 */
import { createI18n } from 'vue-i18n';
const messages = {
    en: {
        toolbar: { title: 'Astara Showroom Management' },
        sidebar: { home: 'Home', new: 'New Vehicle Inventory Item' },
        home: { title: 'Home', subtitle: 'Premium Vehicles & Showroom Management Delivered to Your Dealership.', collections: 'My Showroom Collections' },
        form: { title: 'New Vehicle Inventory Item', subtitle: 'Add Vehicle Inventory Items to Your Collection', section: 'Showroom Section', vehicle: 'Vehicle', quantity: 'Quantity', create: 'Create', cancel: 'Cancel' },
        card: { total: 'Total Vehicles', capacity: 'Available Capacity', empty: 'No Vehicles' }
    },
    es: {
        toolbar: { title: 'Gestión de Showroom Astara' },
        sidebar: { home: 'Inicio', new: 'Nuevo Artículo de Inventario' },
        home: { title: 'Inicio', subtitle: 'Vehículos Premium y Gestión de Showroom en tu Concesionario.', collections: 'Mis Colecciones de Showroom' },
        form: { title: 'Nuevo Artículo de Inventario', subtitle: 'Agrega Vehículos a tu Colección', section: 'Sección del Showroom', vehicle: 'Vehículo', quantity: 'Cantidad', create: 'Crear', cancel: 'Cancelar' },
        card: { total: 'Vehículos Totales', capacity: 'Capacidad Disponible', empty: 'Sin Vehículos' }
    }
};
export default createI18n({ legacy: false, locale: 'en', fallbackLocale: 'en', messages });
