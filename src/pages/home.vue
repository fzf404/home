<!--
 * @Author: fzf404
 * @Date: 2022-02-02 18:40:57
 * @LastEditTime: 2022-08-22 13:06:47
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
  router-link.pink(title="友情链接", to="link") 友链
p
  a.red(target="_blank", title="技术相关笔记", href="https://note.fzf404.art/") 笔记
  a.green(target="_blank", title="充满黑历史的写作博客", href="https://blog.fzf404.art/") 博客
  a.yellow(target="_blank", title="一些应用示例", href="https://demo.fzf404.art/") 例子
  a.green-blue(target="_blank", title="视频解析", href="https://video.fzf404.art/") 影视
  a.purple(target="_blank", title="计算机通识课教案", href="https://share.fzf404.art/") 分享
p
  a.orange(target="_blank", title="Tabox标签页", href="https://tab.fzf404.art/") 起始页
  a.blue(target="_blank", title="跨平台的桌面小组件", href="http://monit.fzf404.art/") 小组件
  a.pink(target="_blank", title="文艺青年", href="https://favor.fzf404.art/") 推荐
  a.yellow-green(target="_blank", title="优雅的像素画工具", href="https://px.fzf404.art/") 像素画
  a.red(target="_blank", title="文字隐藏者", href="https://tools.fzf404.art/text-hider.html") 工具
p
  a.blue-dark(target="_blank", href="https://github.com/fzf404/") Github
  a.green(target="_blank", href="https://www.douban.com/people/169857273/") 豆瓣
  a.blue(target="_blank", href="https://space.bilibili.com/66628023/") BiliBili
  a.orange(target="_blank", href="https://www.zhihu.com/people/fzf404/") 知乎
</template>
