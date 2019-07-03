export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com' // 部署地址
  : 'http://localhost:8081' // 开发地址
