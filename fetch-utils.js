// Enter Supabase Information
const SUPABASE_URL = 'https://ogfxwdqfdtaaoiuiclsh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZnh3ZHFmZHRhYW9pdWljbHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjIsImV4cCI6MTk4MzY4NDA2Mn0.5JRX_e27xoEYI26VTDundVtD05vASo1z964M0KcbMNc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
