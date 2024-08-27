const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/index.js", // 해당 경로 index.js을 build 해서
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 해당 경로에 main.js 로 output 해준다
    // publicPath: "/dist/",
    assetModuleFilename: "static/media/[name].[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 파일에 대한 규칙
        use: ["style-loader", "css-loader"], // CSS 파일을 처리할 로더
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 폰트 파일에 대한 규칙
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // 출력 파일 이름 포맷
              outputPath: "assets/fonts/", // 폰트 파일이 저장될 디렉토리
              // publicPath: "/dist/assets/fonts/", // 브라우저에서 참조하는
            },
          },
        ],
      },
    ],
  },
  plugins: [new WebpackManifestPlugin()],
  // plugins: [
  //   new WebpackManifestPlugin({
  //     fileName: "asset-manifest.json",
  //     publicPath: path.resolve(__dirname, "public"),
  //     generate: (seed, files, entrypoints) => {
  //       const manifestFiles = files.reduce((manifest, file) => {
  //         manifest[file.name] = file.path;
  //         return manifest;
  //       }, seed);
  //       const entrypointFiles = entrypoints.main.filter(
  //         (fileName) => !fileName.endsWith(".map")
  //       );

  //       return {
  //         files: manifestFiles,
  //         entrypoints: entrypointFiles,
  //       };
  //     },
  //   }),
  // ],
  mode: "production", // 프로덕션 모드로 설정
};
