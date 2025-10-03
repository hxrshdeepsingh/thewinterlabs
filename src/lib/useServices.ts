export async function useServices(service: string, domain: string) {
  const api = `/api/webtools?service=${service}&domain=${domain}`
  const res = await fetch(api)
  const data = await res.json()
  return data
}
