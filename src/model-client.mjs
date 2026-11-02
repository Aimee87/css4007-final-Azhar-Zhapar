// Implement any real API or local-model adapter. No provider is required.
export async function complete(messages, tools = []) {
  throw new Error('TODO: implement provider adapter returning {text, toolCalls: [{name, arguments}]}');
}
