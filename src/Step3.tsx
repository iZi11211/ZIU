import { useFormContext } from 'react-hook-form';

export default function Step3() {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  return (
    <div className="step">

      <h3 className="text-lg font-bold" tabIndex={-1}>
        Podsumowanie
      </h3>

      {/* ================= DANE OSOBOWE ================= */}
      <div className="step2__block" aria-label="Dane osobowe">

        <p><b>Imię:</b> {values.firstName}</p>
        <p><b>Nazwisko:</b> {values.lastName}</p>
        <p><b>Email:</b> {values.email}</p>

      </div>

      {/* ================= HASŁO ================= */}
      <div className="step2__block" aria-label="Hasło ukryte">
        <p><b>Hasło:</b> ••••••••</p>
      </div>

      {/* ================= KATEGORIE ================= */}
      <div className="step2__block" aria-label="Kategorie">

        <p className="step2__label">Kategorie:</p>

        {values.categories?.length > 0 ? (
          <ul className="list-disc ml-5">
            {values.categories.map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        ) : (
          <p className="register__error" role="alert">
            Brak kategorii
          </p>
        )}

      </div>

      {/* ================= POWIADOMIENIA ================= */}
      <div className="step2__block" aria-label="Powiadomienia">

        <p className="step2__label">Powiadomienia:</p>

        <p>Email: {values.notifications?.email ? 'TAK' : 'NIE'}</p>
        <p>Push: {values.notifications?.push ? 'TAK' : 'NIE'}</p>
        <p>Newsletter: {values.newsletter ? 'TAK' : 'NIE'}</p>

      </div>

      {/* ================= RODO ================= */}
      <div className="step2__block">

        <label htmlFor="rodo" className="step2__checkbox">
          <input
            id="rodo"
            type="checkbox"
            aria-required="true"
            aria-invalid={!!errors.rodo}
            aria-describedby="rodo-error"
            {...register('rodo')}
          />
          Akceptuję RODO *
        </label>

        {/* ERROR */}
        <span
          id="rodo-error"
          role="alert"
          className="register__error"
        >
          {(errors.rodo as any)?.message}
        </span>

      </div>

    </div>
  );
}