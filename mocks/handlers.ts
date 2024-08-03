import { http } from 'msw'
const apiURL = ''
export const handlers = [
  http.get('/resource', ({ cookies }) => {
    const { token } = cookies
  }),

  http.post('/user', async ({ request }) => {
    // Read the request body as JSON.
    const user = await request.json()
  })
]
