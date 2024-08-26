const path = require("path");

module.exports = {
  entry: "./src/index.js", // 해당 경로 index.js을 build 해서
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 해당 경로에 main.js 로 output 해준다
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 파일에 대한 규칙
        use: ["style-loader", "css-loader"], // CSS 파일을 처리할 로더
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 폰트 파일에 대한 규칙
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]", // 출력 파일 이름 포맷
              outputPath: "fonts/", // 폰트 파일이 저장될 디렉토리
            },
          },
        ],
      },
    ],
  },
  mode: "production", // 프로덕션 모드로 설정
};
