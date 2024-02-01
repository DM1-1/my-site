---
title: Nuxt 快速上手
editLink: true
---

# {{ $frontmatter.title }}
<!-- 
## 前言

最好的方式其实是直接阅读[官方文档](https://nuxt.com/docs)，但是这样有一定的学习成本，而且一开始看很多内容也不知道如何入手，我在这里简单介绍一下 Nuxt 中的一些核心概念和开发中需要注意的点。

## 指南

### 重要概念

如果让我用一句话描述 Nuxt，我会选择：“约定大于配置”。正是许多的约定，令开发体验很顺畅，友好，但是同时也带来了一定学习成本，这可能是很多公司中选型不选择 Nuxt 的原因。
使用 Nuxt 的目的一般是为了 SSR，比如很多公司的官网都会采取 SSR 的方式来优化 SEO，FCP 等指标。当然你也可以使用 Nuxt 来做 SSG，我实习的时候公司的站点业务就都是从 SSR 向 SSG 转变的，基于大型上层框架的开发体验会比你用其他 SSG 开发方式更舒适一些，从社区的支持也更多。

### 目录与路由

在 [文档](https://nuxt.com/docs/guide/directory-structure) 中有详细说到每个文件夹的作用，我这里就讲几个跟 Vue 应用开发不同的点。
在 `page` 文件夹中存放页面文件，支持动态路由，一个参数或者多个参数的写法不一样，多个参数的页面应该使用路由校验。Nuxt 没有路由文件夹，而是根据 `page` 文件夹生成路由。
`plugins` 文件夹用于注册 Vue 插件和其他功能。
`public` 文件夹区别于 `assets`，用于存放静态资源（一些不太可能改变的文件），`assets`中的资源每次打包时会生成哈希文件名，而 `public` 会使用原有的文件名。
`server` 文件夹用于开发后台功能。
`middleware` 文件夹提供中间件服务。
`content` 文件夹存放基于文件的内容管理系统，比如博客，文档站点等。
在 Nuxt 应用中，会自动导入组件，工具，方法，Vue 函数等，直接使用即可。

## 常用组件与 Hooks

### 组件

[`<ClientOnly>`](https://nuxt.com/docs/api/components/client-only)：用于在客户端渲染组件，比如一些只能在客户端运行或者是涉及到获取当前信息的组件（地理，时间信息等）
[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)：用于处理内链，只要是网站内链都应该使用这个，因为他提供了默认开启的 `preload` 功能
[`<NuxtImg>`](https://nuxt.com/docs/api/components/nuxt-img)：用于处理图片，提供了 CDN 服务，响应式图片生成，懒加载等，同时 `<NuxtPicture>` 组件和这个组件拥有相同的功能，可以根据 HTTP 请求头信息生成对应格式的图片（Safari 克星）

### Hooks

[useFetch](https://nuxt.com/docs/api/composables/use-fetch)：从 API 端点获取数据，也就是服务端渲染请求，在页面水合的时候从服务器传递给客户端
[useHead](https://nuxt.com/docs/api/composables/use-head)：用于定义页面头部属性，用于 SEO 优化

## SSR

## SSG

## 一些实践

- 在测试服务器渲染的页面时，需要查看路由载入和刷新页面载入是否都成功，若能通过路由载入但刷新页面无法获取内容很可能是生成路由和页面路由不一致导致的 -->
