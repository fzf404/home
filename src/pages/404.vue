<!--
 * @Author: fzf404
 * @Date: 2022-02-02 19:54:14
 * @LastEditTime: 2022-02-08 22:32:58
 * @Description: 404
-->
<script setup>
import { changeTheme } from 'web-themes/simple/theme'
</script>

<template lang="pug">
h1 
  | 404 
  span.jump(@click="changeTheme") ⛔
h2 
  | 你闯入了未知领域 🙈
p 
  | 长期以来，我们在计算机领域成绩斐然，技术突飞猛进。然而未知领域的发展并不像它表面那么光鲜，未知领域问题依然突出。因此，必须正确认识创新，确保成就的实现。我们不仅要理顺秩序，主张体制机制，转变活力，鼓励标准更要日趋完善。
p 
  router-link.fr(to="/") 返回
</template>
