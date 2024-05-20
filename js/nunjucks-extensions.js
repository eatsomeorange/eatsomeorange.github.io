'use strict';

module.exports = function(hexo) {
  const Nunjucks = require('nunjucks');

  // 定义下划线标签
  hexo.extend.tag.register('u', (args, content) => {
    return `<u>${content}</u>`;
  }, {ends: true});

  // 定义着重号标签
  hexo.extend.tag.register('emp', (args, content) => {
    return `<em>${content}</em>`;
  }, {ends: true});

  // 定义波浪线标签
  hexo.extend.tag.register('wavy', (args, content) => {
    return `<span style="text-decoration: wavy underline;">${content}</span>`;
  }, {ends: true});

  // 定义删除线标签
  hexo.extend.tag.register('del', (args, content) => {
    return `<del>${content}</del>`;
  }, {ends: true});

  // 定义键盘样式标签
  hexo.extend.tag.register('kbd', (args, content) => {
    return `<kbd>${content}</kbd>`;
  }, {ends: true});

  // 定义密码样式标签
  hexo.extend.tag.register('psw', (args, content) => {
    return `<span class="password">${content}</span>`;
  }, {ends: true});
};
