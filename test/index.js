const { setBaseDir } = require('./utils/app')
const { updateImagePath } = require('./utils/update-image')

function main() {
  setBaseDir();
  updateImagePath();  // 更新图片的相对地址
}

// 执行 main 函数
main();