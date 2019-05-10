export default {
  get(url) {
    return new Promise(resolve => {
      wx.request({
        url,
        success: (res) => {
          resolve(res.data)
        }
      })
    })
  }
}