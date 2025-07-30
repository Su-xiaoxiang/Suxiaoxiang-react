<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">React + Vite + TypeScript 企业级开发框架</h1>
<h4 align="center">现代化、高性能、企业级 React 开发框架，让前端开发变得简单、高效、优雅！</h4>
<p align="center">
	<a href="#"><img src="https://img.shields.io/badge/version-1.0.0-green?style=flat-square"></a>
	<a href="#"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square"></a>
	<a href="#"><img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript"></a>
	<a href="#"><img src="https://img.shields.io/badge/Vite-7.0-purple?style=flat-square&logo=vite"></a>
	<a href="#"><img src="https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react"></a>
	<a href="#"><img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css"></a>
	<a href="#"><img src="https://img.shields.io/badge/Node.js-22.0-green?style=flat-square&logo=node.js"></a>
</p>
<p align="center">
	<a href="https://github.com/Su-xiaoxiang/Suxiaoxiang-react" target="_blank">GitHub 仓库</a> | 
	<a href="https://www.npmjs.com/package/create-react-su" target="_blank">npm 包</a> | 
	<a href="#" target="_blank">在线文档</a>
</p>

---

## 📦 下载方式

### 方式一：通过 GitHub 下载

#### 1. 克隆仓库
```bash
# 克隆主仓库
git clone https://github.com/Su-xiaoxiang/Suxiaoxiang-react.git

# 进入项目目录
cd Suxiaoxiang-react
```

#### 2. 安装依赖
```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

#### 3. 启动开发服务器
```bash
# 开发环境
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```

#### 4. 访问应用
开发服务器启动后，在浏览器中访问：`http://localhost:5173`

### 方式二：通过 npm 下载

#### 1. 使用 CLI 工具创建项目
```bash
# 使用 npm create
npm create react-su

# 使用 npx
npx create-react-su

# 使用 yarn create
yarn create react-su

# 使用 pnpm create
pnpm create react-su
```

#### 2. 交互式配置
CLI 工具会引导您完成以下配置：
- 项目名称（如果未在命令行指定）
- 是否覆盖已存在的目录

#### 3. 自动完成项目创建
CLI 工具会自动：
- 创建项目目录结构
- 复制所有模板文件
- 更新 package.json 中的项目名称

#### 4. 开始开发
```bash
# 进入项目目录
cd my-app

# 启动开发服务器
npm run dev
```

### 两种方式的对比

| 特性 | GitHub 克隆 | npm CLI |
|------|-------------|---------|
| **适用场景** | 学习源码、二次开发 | 快速创建新项目 |
| **操作复杂度** | 需要手动配置 | 一键创建 |
| **自定义程度** | 完全自定义 | 基于模板 |
| **更新维护** | 需要手动同步 | 自动获取最新版本 |
| **推荐用户** | 开发者、贡献者 | 普通用户 |

## 🚀 框架介绍

这是一个基于 React 19 + Vite 7 + TypeScript 5 的现代化企业级前端开发框架，集成了当前最流行的技术栈和最佳实践，旨在为团队提供高效、可维护、可扩展的前端开发解决方案。

要在项目中使用此框架，你只需要在 `package.json` 中确保以下依赖：

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "antd": "^5.26.7",
    "autoprefixer": "^10.4.21",
    "axios": "^1.11.0",
    "echarts": "^5.6.0",
    "postcss": "^8.4.41",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.7.1",
    "tailwindcss": "^3.4.10"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@tailwindcss/postcss": "^4.1.3",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "eslint": "^9.30.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.35.1",
    "vite": "^7.0.4"
  }
}
```

除了基础配置，本框架还提供了完整的项目结构、路由管理、API 封装、组件库等企业级功能，真正做到开箱即用。

<details>
<summary><b>快速开始示例：</b>（点击展开 / 折叠）</summary>

本框架旨在以简单、优雅的方式完成企业级前端开发，以路由配置为例，你只需要：

```typescript
// 路由配置，参数填路由路径和组件
const routes = [
    {
        path: '/',
        element: <HomePage />
    }
];
```

无需复杂的配置，无需额外的插件，只需要简单的路由配置，便可以完成页面路由管理。


在框架中，大多数功能都可以简洁的代码解决：

API 请求封装：

```typescript
// 统一的 API 请求封装
import axios from 'axios'

const requestInstance = axios.create({
    baseURL: 'xxxxxxxxxxx',
    timeout: 5000,
})

requestInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

requestInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default requestInstance
```


**如果您曾经使用过传统的 React 项目模板，在切换到本框架后，您将体会到开发效率的质的飞跃。**

</details>

<details>
<summary><b>核心功能一览：</b>（点击展开 / 折叠）</summary>

- **🚀 现代化构建** —— 基于 Vite 7 的极速构建，支持热更新、代码分割、Tree Shaking。
- **📱 响应式设计** —— 基于 Tailwind CSS 的响应式设计系统，适配各种设备。
- **🔧 TypeScript 支持** —— 完整的 TypeScript 支持，提供类型安全和智能提示。
- **🛣️ 路由管理** —— 基于 React Router v6 的路由系统，支持嵌套路由、动态路由。
- **📊 状态管理** —— 集成  react-redux  轻量级状态管理，简单易用且性能优异。
- **🌐 API 封装** —— 基于 Axios 的 API 请求封装，支持拦截器、错误处理、请求取消。
- **🔍 开发工具** —— 集成 ESLint、Prettier、Husky 等开发工具，保证代码质量。
- **📊 数据可视化** —— 集成图表库，支持各种数据可视化需求。
- **🧪 测试支持** —— 集成 Jest、React Testing Library 等测试工具。
- **🔄 热重载** —— 开发环境下的热重载，提升开发效率。
- **📦 包管理** —— 支持 npm、yarn、pnpm 等多种包管理器。
- **🎯 最佳实践** —— 遵循 React 和 TypeScript 最佳实践，提供规范的代码结构。
- **📊 组件库** —— 脚手架封装的有Anti Design组件库。

</details>

## 🏗️ 项目架构

本框架采用现代化的项目架构，确保代码的可维护性和可扩展性：

```
src/
├── 📁 apis/                 # API 接口层
├── 📁 assets/              # 静态资源
│   ├── images/             # 图片资源
│   ├── icons/              # 图标资源
│   └── styles/             # 样式资源
├── 📁 components/          # 公共组件
│   ├── 📁 ui/              # 基础 UI 组件
│   ├── 📁 business/        # 业务组件
│   └── 📁 layout/          # 布局组件
├── 📁 constants/           # 常量定义
├── 📁 hooks/               # 自定义 Hooks
├── 📁 pages/               # 页面组件
│   ├── 📁 index/            # 首页
├── 📁 router/              # 路由配置
│   ├── index.tsx           # 路由主文件
├── 📁 store/               # 状态管理
├── 📁 utils/               # 工具函数
│   ├── index.tsx           # 工具函数入口
│   ├── request.tsx          # 封装的axios请求
├── 📁 types/               # 类型定义
│   ├── sharred.tsx          # 泛型的定义
├── App.tsx                 # 应用根组件
├── main.tsx                # 应用入口
└── index.css               # 全局样式
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0 或 pnpm >= 7.0.0

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 启动开发服务器

```bash
# 开发环境
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```

### 访问应用

开发服务器启动后，在浏览器中访问：`http://localhost:5173`


## 📦 部署指南

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### Docker 部署

```dockerfile
# Dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### CI/CD 配置

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to production
        run: echo "Deploy to production server"
```

## 🤝 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 🐛 Bug 报告
- 💡 功能建议
- 📝 文档改进
- 🔧 代码贡献

### 贡献流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 代码规范

- 遵循 TypeScript 最佳实践
- 使用 ESLint 和 Prettier 保持代码风格一致
- 编写单元测试覆盖新功能
- 更新相关文档

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目的支持：

- [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [React Router](https://reactrouter.com/) - React 的声明式路由

## 📞 联系我们

- 📧 邮箱：2951096305@qq.com

---

<div align="center">
  <p>如果这个项目对您有帮助，请给我们一个 ⭐️</p>
  <p>Made with ❤️ by Your Team</p>
</div>


