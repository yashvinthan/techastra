// ============================================================================
// API CONFIGURATION — TECHASTRA 2026 OS WORKSTATION
// Connects to Render Cloud Backend (https://techastra.onrender.com)
// ============================================================================

export const RENDER_BACKEND_URL = 'https://techastra.onrender.com';

export function getApiBaseUrl(): string {
    if (typeof window === 'undefined') return '';
    const host = window.location.hostname;
    if (host.includes('onrender.com')) return '';
    if ((host === 'localhost' || host === '127.0.0.1') && window.location.port === '8080') return '';
    return RENDER_BACKEND_URL;
}

export function apiUrl(path: string): string {
    const base = getApiBaseUrl();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
}
