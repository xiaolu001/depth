module.exports = {
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    devServer: {
        proxy: {
            '/ws': {     //这里最好有一个 /
                target: 'http://hubi.test.uutaka.com/',  // 后台接口域名
                ws: true,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
            }
        }
      },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {

                return options
            }).end().use('babel')
            .loader('babel-loader').options({
                presets: [
                    ['@babel/preset-env', {
                        modules: false
                    }]
                ]
            })
    }

}