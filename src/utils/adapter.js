import wxRequest from './wxRequest.js'
import Api from './api.js'
// 获取小程序插屏广告
function setInterstitialAd(pagetype) {
  var inFinChat = false
  wx.getSystemInfo({
    success(res) {
      console.log(res.inFinChat)
      if (res.inFinChat) {
        inFinChat = true
      }
      if (!inFinChat) {
        var getOptionsRequest = wxRequest.getRequest(Api.getOptions())
        getOptionsRequest.then((res) => {
          // 获取广告id，创建插屏广告组件
          var adUnitId = res.data.interstitialAdId

          var enableAd = false

          var enable_index_interstitial_ad = res.data.enable_index_interstitial_ad
          var enable_detail_interstitial_ad = res.data.enable_detail_interstitial_ad
          var enable_topic_interstitial_ad = res.data.enable_topic_interstitial_ad
          var enable_list_interstitial_ad = res.data.enable_list_interstitial_ad
          var enable_hot_interstitial_ad = res.data.enable_hot_interstitial_ad
          var enable_comments_interstitial_ad = res.data.enable_comments_interstitial_ad
          var enable_live_interstitial_ad = res.data.enable_live_interstitial_ad

          if (!adUnitId) return
          if (!adUnitId) return
          if (wx.createInterstitialAd) {
            let interstitialAd = wx.createInterstitialAd({
              adUnitId: adUnitId
            })
            // 监听插屏错误事件
            interstitialAd.onError((err) => {
              console.error(err)
            })
            // 显示广告
            if (interstitialAd) {
              switch (pagetype) {
                case 'enable_index_interstitial_ad':
                  if (enable_index_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break

                case 'enable_detail_interstitial_ad':
                  if (enable_detail_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break

                case 'enable_topic_interstitial_ad':
                  if (enable_topic_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break

                case 'enable_list_interstitial_ad':
                  if (enable_list_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break

                case 'enable_hot_interstitial_ad':
                  if (enable_hot_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break

                case 'enable_comments_interstitial_ad':
                  if (enable_comments_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break

                case 'enable_live_interstitial_ad':
                  if (enable_live_interstitial_ad == '1') {
                    enableAd = true
                  }
                  break
              }
              if (enableAd) {
                interstitialAd.show().catch((err) => {
                  console.error(err)
                })
              }
            }
          }
        })
      }
    }
  })
}

export default {
  setInterstitialAd: setInterstitialAd
}
