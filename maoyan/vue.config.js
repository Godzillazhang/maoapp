const path = require('path')

module.exports = {
    devServer:{
        "/api":{
            target:"http://39.97.33.178",
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            "@":path.join(__dirname, './src'),
            "@api":path.join(__dirname, './src/api'),//接口
            "@assets":path.join(__dirname, './src/assets'),
            "@common":path.join(__dirname, './src/common'),//公共文件
            "@components":path.join(__dirname, './src/components'),//组件
            "@pages":path.join(__dirname, './src/pages'),//页面
            "@router'":path.join(__dirname, './src/router'),
            "@store":path.join(__dirname, './src/store'),//vuex
            "@ueils":path.join(__dirname, './src/ueils'),
        }
    }
  }