import axiosClient from '@/api/axiosClient'

export const commentApi = {
  getAll({ videoId, page }: { videoId: number; page: number }) {
    return axiosClient.get(`videos/${videoId}/comments`, {
      params: {
        page
      }
    })
  },

  add({ videoUuid, content }: { videoUuid: string; content: string }) {
    return axiosClient.post(`videos/${videoUuid}/comments`, {
      comment: content
    })
  },

  delete(commentId: number) {
    return axiosClient.delete(`comments/${commentId}`)
  },

  like(commentId: number) {
    return axiosClient.post(`comments/${commentId}/like`, [])
  },

  unlike(commentId: number) {
    return axiosClient.post(`comments/${commentId}/unlike`, [])
  }
}
