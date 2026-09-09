/**
 * API Configuration
 * Centralizes environment-based configuration
 */

export const API_CONFIG = {
  BASE_URL:
    import.meta.env["VITE_API_URL"] ||
    import.meta.env["VITE_API_BASE_URL"] ||
    "http://localhost:8080",
  WS_URL:
    import.meta.env["VITE_WS_URL"] ||
    (import.meta.env["VITE_API_URL"] ||
      import.meta.env["VITE_API_BASE_URL"] ||
      "http://localhost:8080").replace(/^https/, "https").replace(/^http/, "http") +
    "/ws",
  ENDPOINTS: {
    ROOMS: "/api/rooms",
  },
} as const;
