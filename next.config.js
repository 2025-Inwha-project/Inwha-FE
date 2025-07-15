// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',         // Service Worker를 public에 생성
  register: true,         // 자동 등록
  skipWaiting: true       // 새로운 SW가 바로 활성화
})

const nextConfig = {
  // 다른 설정들 (예: reactStrictMode 등)
  reactStrictMode: true,
  // PWA 설정 외 다른 옵션도 여기에 추가 가능
}

module.exports = withPWA(nextConfig)

  