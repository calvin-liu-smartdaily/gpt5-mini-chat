# GPT-5 Mini 聊天應用程式

一個基於 React + Vite 的簡潔 GPT-5 Mini 聊天介面，支援自訂系統提示詞和即時對話。

## ✨ 功能特色

- 🤖 **GPT-5 Mini 整合**：直接與 OpenAI GPT-5 Mini 模型對話
- 💬 **即時聊天介面**：流暢的對話體驗，支援多輪對話
- 🎛️ **自訂系統提示詞**：可自由設定 AI 助理的角色和行為
- 🌏 **繁體中文支援**：完整的繁體中文介面
- ⚡ **快速回應**：基於 Vite 的快速開發和建置
- 📱 **響應式設計**：適配各種螢幕尺寸

## 🛠️ 技術堆疊

- **前端框架**：React 18
- **建置工具**：Vite 5
- **API 整合**：OpenAI GPT-5 Mini API
- **樣式**：內聯樣式 (Inline Styles)
- **語言**：繁體中文

## 📦 安裝指南

### 前置需求
- Node.js (建議版本 16 或以上)
- npm 或 yarn
- OpenAI API 金鑰

### 安裝步驟

1. **複製專案**
   ```bash
   git clone https://github.com/calvin-liu-smartdaily/gpt5-mini-chat.git
   cd gpt5-mini-chat
   ```

2. **安裝依賴套件**
   ```bash
   npm install
   ```

3. **配置 API 金鑰**
   
   開啟 `src/App.jsx` 檔案，將以下行中的 API 金鑰替換為你的實際金鑰：
   ```javascript
   const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // 請替換為你自己的金鑰
   ```

4. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

5. **開啟瀏覽器**
   
   訪問 `http://localhost:5173` 開始使用

## 🚀 使用說明

### 基本操作

1. **設定系統提示詞**：在頂部的「System Prompt」欄位中輸入你想要的 AI 助理角色設定
2. **開始對話**：在底部輸入框中輸入訊息，按 Enter 或點選「送出」按鈕
3. **查看回覆**：AI 的回覆會顯示在聊天區域中

### 系統提示詞範例

- **預設助理**：`你是一個有幫助的助理`
- **程式設計助手**：`你是一個專業的程式設計師，擅長解決技術問題`
- **翻譯助手**：`你是一個專業的翻譯員，能夠準確翻譯各種語言`
- **創意寫作**：`你是一個富有創意的作家，善於創作有趣的故事`

## 📁 專案結構

```
gpt5-mini-chat/
├── src/
│   ├── App.jsx          # 主要應用程式元件
│   └── main.jsx         # 應用程式入口點
├── index.html           # HTML 模板
├── package.json         # 專案配置和依賴
├── package-lock.json    # 依賴版本鎖定
└── README.md           # 專案說明文件
```

## 🔧 開發指令

```bash
# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 🔐 安全考量

### API 金鑰管理

**重要提醒**：目前 API 金鑰是硬編碼在前端程式碼中，這在生產環境中是不安全的。建議的改進方式：

1. **環境變數**：使用 `.env` 檔案管理敏感資訊
2. **後端代理**：透過後端服務代理 API 請求
3. **伺服器端渲染**：在伺服器端處理 API 呼叫

### 生產環境部署建議

```javascript
// 建議的安全配置方式
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || '/api/chat';
```

## 🐛 常見問題

### API 金鑰錯誤
- 確認已正確設定 OpenAI API 金鑰
- 檢查金鑰是否有效且有足夠的配額

### 網路連線問題
- 確認網路連線正常
- 檢查是否有防火牆阻擋 OpenAI API 請求

### 建置失敗
- 確認 Node.js 版本符合需求
- 刪除 `node_modules` 資料夾後重新安裝依賴

## 🤝 參與貢獻

歡迎提交 Issue 和 Pull Request 來改進這個專案！

### 貢獻指南

1. Fork 此專案
2. 建立功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交變更 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 🎯 未來規劃

- [ ] 環境變數支援
- [ ] 多語言切換功能
- [ ] 聊天記錄持久化
- [ ] 匯出對話記錄
- [ ] 主題切換功能
- [ ] 更多 AI 模型支援

## 📄 授權條款

此專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡資訊

如有任何問題或建議，歡迎透過 GitHub Issues 聯絡我們。

---

⭐ 如果這個專案對你有幫助，請給我們一個星星！
