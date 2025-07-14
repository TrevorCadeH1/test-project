export async function GET() {
    try {
        const res = await fetch(
            'https://wbscdev.wurthbaersupply.com/rest/getrandomgroups',
            {
                method: 'GET',
                headers: {
                    'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN2!,
                }
            }
        )
        
        if (!res.ok) {
            throw new Error(`API error: ${res.status}`)
        }
        
        const data = await res.json()
        return Response.json(data)
    } catch (error) {
        console.error('API error:', error)
        return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}
