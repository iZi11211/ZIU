import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({
      email: 'demo@test.com',
    });
  }),

  http.post('/api/register', async ({ request }) => {
     
    const body = (await request.json()) as {
      email?: string;
    };

    if (body.email === 'error@test.com') {
      return HttpResponse.json(
        {
          message: 'Błąd rejestracji',
        },
        {
          status: 400,
        }
      );
    }

    return HttpResponse.json({
      success: true,
      id: crypto.randomUUID(),
    });
  }),
];