<!--
 * @Author: fzf404
 * @Date: 2022-02-02 18:40:57
 * @LastEditTime: 2022-04-12 11:27:32
 * @Description: 首页
-->
<script setup>
import { changeTheme } from 'web-themes/simple/theme'
</script>

<template lang="pug">
h1
  | 欢迎呀 
  span.jump(@click="changeTheme") 🙌
h2
  | Here is My Home Page 🏠
p
  router-link.green-blue(title="关于我", to="about") 关于我
  router-link.pink(title="友情链接", to="link") 友情链接
p
  a.red(target="_blank", title="供同学们使用的服务", href="http://server.fzf404.top/") 服务
  a.yellow(target="_blank", title="技术相关笔记", href="https://note.fzf404.top/") 笔记
  a.green(target="_blank", title="充满黑历史的写作博客", href="https://blog.fzf404.top/") 博客
  a.blue(target="_blank", title="一些应用示例", href="https://demo.fzf404.top/") 例子
  a.purple(target="_blank", title="计算机通识课教案", href="https://share.fzf404.top/") 分享
p
  a.orange(target="_blank", title="Tabox标签页", href="https://tab.fzf404.top/") 起始页
  a.yellow-green(target="_blank", title="优雅的像素画工具", href="https://px.fzf404.top/") 像素画
  a.green-blue(target="_blank", title="文字隐藏者", href="https://tools.fzf404.top/text-hider.html") 工具
  a.pink(target="_blank", title="文艺青年", href="https://favor.fzf404.top/") 推荐
p
  a.blue-dark(target="_blank", href="https://github.com/fzf404/") Github
  a.green(target="_blank", href="https://www.douban.com/people/169857273/") 豆瓣
  a.blue(target="_blank", href="https://space.bilibili.com/66628023/") BiliBili
  a.orange(target="_blank", href="https://www.zhihu.com/people/fzf-78/") 知乎
</template>
