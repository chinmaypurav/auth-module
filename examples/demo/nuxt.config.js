const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  build: {
    extractCSS: true
  },
  serverMiddleware: ['../api/auth'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@@'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://localhost:3000'
  },
  auth: {
    redirect: {
      callback: '/callback'
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken'
        }
      },
      localRefresh: {
        _scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 15
        },
        refreshToken: {
          property: 'token.refreshToken',
          data: 'refreshToken',
          maxAge: false
        },
        clientId: {
          property: 'token.clientId',
          data: 'clientId'
        },
        grantType: {
          data: 'grantType'
        },
        autoRefresh: true
      },
      auth0: {
        domain: 'nuxt-auth.auth0.com',
        clientId: 'q8lDHfBLJ-Fsziu7bf351OcYQAIe3UJv'
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
        },
        clientId: '1671464192946675',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        clientId:
          '956748748298-kr2t08kdbjq3ke18m3vkl6k843mra1cg.apps.googleusercontent.com'
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      },
      twitter: {
        clientId: 'FAJNuxjMTicff6ciDKLiZ4t0D'
      }
    }
  }
}
