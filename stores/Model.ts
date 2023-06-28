export const modelInfos: Record<
  string,
  {
    displayName: string;
    maxTokens: number;
    costPer1kTokens: { prompt: number; completion: number };
  }
> = {
  "gpt-3.5-turbo": {
    displayName: "ChatGPT-3.5",
    maxTokens: 4096,
    costPer1kTokens: { prompt: 0.0015, completion: 0.002 },
  },
  "gpt-3.5-turbo-0301": {
    displayName: "ChatGPT-3.5 March 1",
    maxTokens: 4096,
    costPer1kTokens: { prompt: 0.0015, completion: 0.002 },
  },
  "gpt-3.5-turbo-0613": {
    displayName: "ChatGPT-3.5 June 13",
    maxTokens: 4096,
    costPer1kTokens: { prompt: 0.0015, completion: 0.002 },
  },
  "gpt-3.5-turbo-16k": {
    displayName: "gpt-3.5-turbo-16k",
    maxTokens: 16384,
    costPer1kTokens: { prompt: 0.003, completion: 0.004 },
  },
  "gpt-4": {
    displayName: "GPT-4",
    maxTokens: 8192,
    costPer1kTokens: { prompt: 0.03, completion: 0.06 },
  },
};

export const getModelInfo = (model: string) =>
  modelInfos[model] || {
    displayName: model,
    maxTokens: 4096,
    costPer1kTokens: {prompt: 0, completion: 0},
  };
