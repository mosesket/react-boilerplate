const Domain = import.meta.env.VITE_ENDPOINT
  ? import.meta.env.VITE_ENDPOINT
  : "http://127.0.0.1:8000/api";

export default Domain;
