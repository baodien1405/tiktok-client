import axiosClient from '@/api/axiosClient'

export const videoApi = {
  getAll({ type = 'for-you', page }: { type?: string; page: number }) {
    return axiosClient.get('videos', {
      params: {
        type,
        page
      }
    })
  },

  like(videoId: number) {
    return axiosClient.post(`videos/${videoId}/like`, [])
  },

  unlike(videoId: number) {
    return axiosClient.post(`videos/${videoId}/unlike`, [])
  },

  upload({ formData }: { formData: FormData }) {
    return axiosClient.post('videos', formData)
  },

  delete(videoId: number) {
    return axiosClient.delete(`videos/${videoId}`)
  }
}
