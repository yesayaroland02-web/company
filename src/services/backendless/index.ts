import Backendless from "backendless";

const APP_ID = import.meta.env.VITE_BACKENDLESS_APP_ID;
const API_KEY = import.meta.env.VITE_BACKENDLESS_API_KEY;

if (!APP_ID || !API_KEY) {
  throw new Error("Backendless App ID atau API Key belum diatur di .env");
}

Backendless.initApp(APP_ID, API_KEY);

export default Backendless;