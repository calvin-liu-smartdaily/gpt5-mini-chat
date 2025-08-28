# GPT-5 Mini Chat

A simple, clean chat interface for interacting with OpenAI's GPT-5 Mini model. Built with React and Vite for fast development and optimal performance.

## 🚀 Features

- **Clean Chat Interface**: Simple and intuitive chat UI with real-time message display
- **Customizable System Prompt**: Modify the AI's behavior with custom system prompts
- **OpenAI GPT-5 Mini Integration**: Direct integration with OpenAI's latest GPT-5 Mini model
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Chinese Language Support**: Interface optimized for Chinese users
- **Real-time Interaction**: Instant message sending with loading indicators
- **Keyboard Shortcuts**: Press Enter to send messages quickly

## 🛠️ Technology Stack

- **Frontend**: React 18 with hooks
- **Build Tool**: Vite 5
- **Styling**: Inline CSS with responsive design
- **API**: OpenAI Chat Completions API
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **OpenAI API Key** with access to GPT-5 Mini model

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/calvin-liu-smartdaily/gpt5-mini-chat.git
cd gpt5-mini-chat/gpt5-mini-chat
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure API Key
Open `src/App.jsx` and replace the placeholder with your actual OpenAI API key:

```javascript
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key
```

**⚠️ Security Note**: For production use, consider using environment variables instead of hardcoding the API key.

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### 5. Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📖 Usage

1. **System Prompt**: Customize how the AI behaves by modifying the system prompt field
2. **Chat Interface**: Type your message in the input field
3. **Send Messages**: Click "送出" button or press Enter to send
4. **View Responses**: AI responses appear on the left, your messages on the right

## 🔧 Configuration

### API Settings
The application is configured to use:
- **Model**: `gpt-5-mini`
- **Max Tokens**: 512
- **Temperature**: 0.7

You can modify these settings in the `sendMessage` function in `src/App.jsx`.

### Environment Variables (Recommended)
For better security, create a `.env` file:
```
VITE_OPENAI_API_KEY=your_api_key_here
```

Then update the code to use:
```javascript
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
```

## 📁 Project Structure

```
gpt5-mini-chat/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔒 Security Considerations

- Never commit your API keys to version control
- Use environment variables for sensitive data
- Consider implementing rate limiting for production use
- Validate and sanitize user inputs

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your OpenAI API key is valid and has access to GPT-5 Mini
2. **Build Errors**: Ensure you have Node.js 16+ installed
3. **Network Issues**: Check your internet connection and firewall settings

### Error Messages
- "API 回覆異常" - API response error, check your API key and network connection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or issues, please:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

## 🚀 Future Enhancements

- [ ] Environment variable configuration
- [ ] Message history persistence
- [ ] Dark/Light theme toggle
- [ ] Export chat conversations
- [ ] Multiple conversation threads
- [ ] Message editing and regeneration
- [ ] File upload support
- [ ] Voice input/output

---

Made with ❤️ for the AI community
