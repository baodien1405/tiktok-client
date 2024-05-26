import axiosClient from '@/api/axiosClient'
import { AuthPayload } from '@/models'

export const authApi = {
  register(payload: AuthPayload) {
    return axiosClient.post('/auth/register', payload)
  },

  login(payload: Omit<AuthPayload, 'type'>) {
    return axiosClient.post('/auth/login', payload)
  },

  logout() {
    return axiosClient.post('/auth/logout', [])
  },

  getCurrentUser() {
    return axiosClient.get('/auth/me')
  },

  updateCurrentUser({ formData, _method = 'PATCH' }: { formData: FormData; _method?: string }) {
    return axiosClient.post('auth/me', formData, {
      params: {
        _method
      }
    })
  }
}
