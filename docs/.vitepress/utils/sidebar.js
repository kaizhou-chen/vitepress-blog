import fs from 'fs'
import path from 'path'

const base = process.cwd(); // 项目根目录
const separator = path.sep; // 文件分隔符

export function getSidebar(text, dir) {
  const list = [
    { text, collapsed: true, items: [] }
  ];

  const filepath = path.join(base, dir)
  getItems(filepath, list[0].items);
  return list;
}

function getItems(dir, list) {
  const files = fs.readdirSync(dir);
  files.forEach(name => {
    const filepath = path.join(dir, name);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      const items = [];
      list.push({
        text: name,
        items
      })

      getItems(filepath, items);
    } else {
      list.push({
        text: getLabel(name),
        link: getUrl(filepath)
      });
    }
  });
}

/**
 * 将文件名，转换为菜单上的显示名称
 */
function getLabel(name) {
  return name.replace(/_/g, ' ')      // 将下划线 _ 替换为空格
             .replace(/^\d*[.]/g, '') // 将开头的序号删除，比如：1.  01.
             .replace(/([.]md)$/, '') // 将结尾的 .md 后缀删除
}

/**
 * 将文件路径，转换为菜单上的链接地址
 */
function getUrl(filepath) {
  const root = path.join(base, 'docs');

  return filepath.replace(root , '')  // 只保留相对路径
             .replace(/\\/g, '/')     // 将分隔符统一成 /
             .replace(/([.]md)/, '')  // 将结尾的 .md 后缀删除
}
