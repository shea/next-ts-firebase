// Placeholder call to external service
// Returns an example response after a short delay
// Replace this with your actual API call
export async function callApi() {
  const sleep = async (ms: number) => new Promise(r => setTimeout(r, ms))
  await sleep(1000)
  return { example: true }
}
