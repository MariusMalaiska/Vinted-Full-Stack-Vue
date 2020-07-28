module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/scss/variables.scss";
          @import "~@/scss/vendors/index.scss";
          @import "~@/scss/main.scss";
          `
      },
    }
  }
}
