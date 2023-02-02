module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BACKEND_BASE_URL,
        ws: true,
        changeOrigin: true
      }
    },
    host: "localhost"
  }
};
