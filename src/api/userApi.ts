import axiosClient from '@/api/axiosClient'

export const userApi = {
  getSuggestedAccountList({ page, limit }: { page: number; limit: number }) {
    return axiosClient.get('users/suggested', {
      params: {
        page,
        per_page: limit
      }
    })
  },

  getFollowingAccountList(page: number) {
    return axiosClient.get('me/followings', {
      params: {
        page
      }
    })
  },

  get(nickname: string) {
    return axiosClient.get(`users/${nickname}`)
  },

  follow(userId: number) {
    return axiosClient.post(`users/${userId}/follow`, [])
  },

  unFollow(userId: number) {
    return axiosClient.post(`users/${userId}/unfollow`, [])
  }
}
