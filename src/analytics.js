// src/analytics.ts
import Plausible from 'plausible-tracker';
/*
Zbierane dane (minimalizacja RODO):
- pageview (odwiedzona podstrona)
- kliknięcie CTA
- porzucenie formularza
- wysłanie formularza

Nie zbieramy:
- imienia
- emaila
- treści formularza
- haseł
- danych identyfikujących użytkownika
*/
export const plausible = Plausible({
    domain: 'localhost',
    trackLocalhost: true,
});
// automatyczne pageviews
plausible.enableAutoPageviews();
// EVENTS
export const trackCTA = (location) => plausible.trackEvent('CTA Click', {
    props: { location },
});
export const trackFormAbandon = (step) => plausible.trackEvent('Form Abandoned', {
    props: {
        step: String(step),
    },
});
export const trackRegisterSubmit = () => plausible.trackEvent('Register Submit');
