# Todo 清单

基于 Vue 3、TypeScript 和 Vite 的简单待办应用。支持新增、编辑、完成、删除待办事项，清除已完成事项，并显示完成统计。数据自动保存在浏览器的 `localStorage` 中。

## 运行

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
```

## 结构

```text
App
├── TodoBrandBar
├── TodoIntro
├── TodoInput
├── TodoList
│   └── TodoItem
│       ├── TodoEditButton
│       └── TodoDeleteButton
└── TodoFooter
    ├── TodoStatistics
    └── TodoClearButton

composables/useTodos.ts  待办状态、增删改、完成统计和本地存储
```

`App.vue` 只负责组合页面并连接组件事件。`TodoInput` 管理新增输入框，`TodoItem` 管理单项编辑状态，待办数据由 `useTodos` 统一管理。
