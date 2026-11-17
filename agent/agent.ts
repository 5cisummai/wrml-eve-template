import { createGateway } from "ai";
import { defineAgent } from "eve";

const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY,
});

export default defineAgent({
  model: gateway("openai/gpt-6-luna-fast"),
  reasoning: "low",
});
