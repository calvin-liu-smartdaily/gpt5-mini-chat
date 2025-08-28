import React, { useState } from "react";

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // 請替換為你自己的金鑰

export default function App() {
  const [systemPrompt, setSystemPrompt] = useState("你是一個有幫助的助理");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const payload = {
      model: "gpt-5-mini", // 假設已支援此名稱
      messages: [
        { role: "system", content: systemPrompt },
        ...newMessages,
      ],
      max_tokens: 512,
      temperature: 0.7,
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    const aiReply = data.choices?.[0]?.message?.content || "API 回覆異常";
    setMessages([...newMessages, { role: "assistant", content: aiReply }]);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>GPT-5 Mini Chat</h2>
      <div>
        <label>
          <b>System Prompt:</b>
          <input
            type="text"
            value={systemPrompt}
            onChange={e => setSystemPrompt(e.target.value)}
            style={{ width: "100%", marginBottom: 12 }}
          />
        </label>
      </div>
      <div style={{ minHeight: 200, border: "1px solid #ccc", padding: 8, marginBottom: 12, background: "#fafafa" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left", margin: "8px 0" }}>
            <b>{m.role === "user" ? "你" : "AI"}:</b> {m.content}
          </div>
        ))}
        {loading && <div>AI 輸出中...</div>}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          disabled={loading}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1 }}
          onKeyDown={e => { if (e.key === "Enter") sendMessage(); }}
          placeholder="輸入訊息..."
        />
        <button onClick={sendMessage} disabled={loading}>送出</button>
      </div>
    </div>
  );
}