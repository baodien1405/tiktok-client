import axiosClient from '@/api/axiosClient'

export const searchApi = {
  search(q: string, type = 'less') {
    return axiosClient.get('/users/search', {
      params: {
        q,
        type
      }
    })
  }
}
