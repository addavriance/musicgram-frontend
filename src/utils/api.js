const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

class ApiClient {
    constructor() {
        this.baseURL = API_BASE_URL
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`

        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        }

        try {
            const response = await fetch(url, config)

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ detail: 'Network error' }))
                throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('API request failed:', error)
            throw error
        }
    }

    async getAuthUrl(userId) {
        return this.request(`/auth/url/${userId}`)
    }

    async handleAuthCallback(code, state) {
        return this.request('/auth/callback', {
            method: 'POST',
            body: JSON.stringify({ code, state })
        })
    }

    async getAuthStatus(userId) {
        return this.request(`/auth/status/${userId}`)
    }

    async disconnectSpotify(userId) {
        return this.request(`/auth/disconnect/${userId}`, {
            method: 'DELETE'
        })
    }

    async getCurrentTrack(userId) {
        return this.request(`/tracks/current/${userId}`)
    }

    async getConnectedUsers() {
        return this.request('/tracks/users')
    }

    async getStats() {
        return this.request('/tracks/stats')
    }

    async healthCheck() {
        return this.request('/health')
    }
}

const apiClient = new ApiClient()

export default apiClient

export const {
    getAuthUrl,
    handleAuthCallback,
    getAuthStatus,
    disconnectSpotify,
    getCurrentTrack,
    getConnectedUsers,
    getStats,
    healthCheck
} = apiClient
