export async function fetchData(url) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, { cache: 'no-store' })
  const data = await res.json()
  if (!data) {
    return 404
  } else {
    return data
  }
}
