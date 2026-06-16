// ============================
// POST /api/register
// ============================
export const registerUser = async (data) => {
    const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error?.message || 'REGISTER_REQUEST_FAILED');
    }
    return res.json();
};
// ============================
// GET /api/user
// ============================
export const getUser = async () => {
    const res = await fetch('/api/user');
    if (!res.ok) {
        throw new Error('USER_FETCH_FAILED');
    }
    return res.json();
};
