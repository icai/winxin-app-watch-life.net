/*
 *
 * 微慕小程序开源版
 * author: jianbo
 * organization: 微慕  www.minapper.com
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017  微慕 https://www.minapper.com All rights reserved.
 *
 */

import Api from '../../utils/api.js'

import util from '../../utils/util.js'
import wxApi from '../../utils/wxApi.js'
import wxRequest from '../../utils/wxRequest.js'
import auth from '../../utils/auth.js'
import config from '../../utils/config.js'
var app = getApp()

Page({
  data: {
    posterImageUrl: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },
  onLoad: function (options) {
    var self = this

    wx.setNavigationBarTitle({
      title: '海报',
      success: function (res) {
        // success
      }
    })
    self.setData({
      posterImageUrl: options.posterImageUrl
    })
  },
  savePosterImage: function () {
    var self = this
    wx.downloadFile({
      url: self.data.posterImageUrl,
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(result) {
            console.log(result)
            wx.showModal({
              title: '提示',
              content: '二维码海报已存入手机相册，赶快分享吧',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.navigateBack({
                    delta: 1
                  })
                }
              }
            })
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  posterImageClick: function (e) {
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      urls: [src]
    })
  }
})
