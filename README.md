vue-music
## 使用vue开发百度音乐webApp

## 使用 reset.css 来进行样式的初始化
## border.css 用来解决移动端 1px 边框问题
## fastclick 插件来解决移动端 300ms 延迟的问题
   安装: npm install fastclick --save-dev 使用：在 main.js 中添加如下代码 import FastClick from 'fastclick' FastClick.attach(document.body)

## 使用百度音乐的api接口获取数据
   接口地址：http://tingapi.ting.baidu.com/v1/restserver/ting 参考文档：http://67zixue.com/home/article/detail/id/22.html

## 通过设置代理来解决跨域问题
## 使用插件 vue-awesome-swiper 来实现轮播图效果
   安装： npm install vue-awesome-swiper 
   使用： 因为只有首页有该轮播图组件，故采用局部引用的方式 
   import 'swiper/dist/css/swiper.css' 
   import { swiper, swiperSlide } from 'vue-awesome-swiper' 
   export default { 
      components: { 
         swiper, swiperSlide 
      } 
   }

## 路由参数的接收：this.$route.params.a(a表示路由参数)
## 父组件通过属性向子组件传值，子组件通过 props 来接收父组件传递过来的值
## 项目中使用的下拉刷新插件： vue-pull-refresh
