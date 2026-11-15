import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function complete(messages, tools = []) {
  const prompt = messages.map(m => m.content).join("\n");

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return {
    text: response.text,
    toolCalls: [],
  };
}
