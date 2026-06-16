import { http, HttpResponse } from 'msw';
export const handlers = [
    // GET user
    http.get('/api/user', () => {
        return HttpResponse.json({
            email: 'demo@test.com',
        });
    }),
    // POST register
    http.post('/api/register', async ({ request }) => {
        const body = await request.json();
        console.log('MSW REGISTER:', body);
        // symulacja błędu (opcjonalnie test)
        if (body.email === 'error@test.com') {
            return new HttpResponse(JSON.stringify({ message: 'Błąd rejestracji' }), { status: 400 });
        }
        return HttpResponse.json({
            success: true,
            id: crypto.randomUUID(),
        });
    }),
];
