module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @charset "utf-8";
          @import "~@/scss/_mixins.scss";
        `
      }
    }
  }
};