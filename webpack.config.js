const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename:"main.js",
    publicPath: "/dist/",
    assetModuleFilename:'images/[hash].[ext][query]' 
  },

  devServer: {
    historyApiFallback:true,
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port:9000
  },

  mode:"development",

  watch:true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        // test: /\.css$/,
        test: /\.(css)$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.svg/,
        type:'asset/resource',
      }
    ],
  },

  target: 'web', 
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      'Vue': "vue/dist/vue.esm-bundler",
    },
    extensions: ["*", ".js", ".vue", ".json","css"],
  },
};