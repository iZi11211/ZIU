http.post('/api/register', async ({ request }) => {
  const body = (await request.json()) as {
    email: string;
    firstName?: string;
    lastName?: string;
    password?: string;
  };

  console.log('MSW REGISTER:', body);

  if (body?.email === 'error@test.com') {
    return HttpResponse.json(
      { message: 'Błąd rejestracji' },
      { status: 400 }
    );
  }

  return HttpResponse.json({
    success: true,
    id: crypto.randomUUID(),
  });
});