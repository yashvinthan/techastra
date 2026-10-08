// ============================================================================
// API CONFIGURATION — TECHASTRA 2026 ADMIN PORTAL
// Connects to Render Cloud Backend (https://techastra.onrender.com)
// ============================================================================

export const RENDER_BACKEND_URL = 'https://techastra.onrender.com';

export function getApiBaseUrl(): string {
    if (typeof window === 'undefined') return '';
    const host = window.location.hostname;
    // When served directly on the Render backend
    if (host.includes('onrender.com')) {
        return '';
    }
    // Local dev server running on port 8080 with local backend
    if ((host === 'localhost' || host === '127.0.0.1') && window.location.port === '8080') {
        return '';
    }
    // Firebase Hosting, custom domain, or GitHub Pages -> Route to Render backend
    return RENDER_BACKEND_URL;
}

export function apiUrl(path: string): string {
    const base = getApiBaseUrl();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
}
