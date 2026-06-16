import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

export default function Step1() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const password = watch('password');

  // tylko SIŁA hasła – BEZ trigger
  const strength =
    password?.length > 10
      ? 'strong'
      : password?.length > 6
      ? 'medium'
      : 'weak';

  return (
    <div className="step">

      {/* ================= FIRST NAME ================= */}
      <label htmlFor="firstName">Imię *</label>

      <input
        id="firstName"
        className="register__input"
        aria-required="true"
        aria-invalid={!!errors.firstName}
        aria-describedby="firstName-error"
        {...register('firstName')}
      />

      <span id="firstName-error" role="alert" className="register__error">
        {errors.firstName?.message as string}
      </span>

      {/* ================= LAST NAME ================= */}
      <label htmlFor="lastName">Nazwisko *</label>

      <input
        id="lastName"
        className="register__input"
        aria-required="true"
        aria-invalid={!!errors.lastName}
        aria-describedby="lastName-error"
        {...register('lastName')}
      />

      <span id="lastName-error" role="alert" className="register__error">
        {errors.lastName?.message as string}
      </span>

      {/* ================= EMAIL ================= */}
      <label htmlFor="email">Email *</label>

      <input
        id="email"
        type="email"
        className="register__input"
        aria-required="true"
        aria-invalid={!!errors.email}
        aria-describedby="email-error"
        {...register('email')}
      />

      <span id="email-error" role="alert" className="register__error">
        {errors.email?.message as string}
      </span>

      {/* ================= PASSWORD ================= */}
      <label htmlFor="password">Hasło *</label>

      <input
        id="password"
        type="password"
        className="register__input"
        aria-required="true"
        aria-invalid={!!errors.password}
        aria-describedby="password-error"
        {...register('password')}
      />

      <span id="password-error" role="alert" className="register__error">
        {errors.password?.message as string}
      </span>

      {/* ================= PASSWORD STRENGTH ================= */}
      <p aria-live="polite" className={`password-strength password-strength--${strength}`}>
        Siła hasła: {strength}
      </p>

      {/* ================= CONFIRM PASSWORD ================= */}
      <label htmlFor="confirmPassword">Powtórz hasło *</label>

      <input
        id="confirmPassword"
        type="password"
        className="register__input"
        aria-required="true"
        aria-invalid={!!errors.confirmPassword}
        aria-describedby="confirmPassword-error"
        {...register('confirmPassword')}
      />

      <span
        id="confirmPassword-error"
        role="alert"
        className="register__error"
      >
        {errors.confirmPassword?.message as string}
      </span>

    </div>
  );
}