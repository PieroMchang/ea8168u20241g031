/**
 * @summary Base API for Local JSON Server
 * @author Piero Francisco Montes Chang
 */
import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-type': 'application/json' }
});