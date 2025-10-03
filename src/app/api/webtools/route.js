export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const service = searchParams.get('service')
    const domain = searchParams.get('domain')

    if (!service || !domain) return new Response(JSON.stringify({ error: 'Missing params' }), { status: 400 })

    const res = await fetch(`https://thewinterlabs-webtools.onrender.com/${service}/?payload=${domain}`)
    const data = await res.json()

    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
  }
}
