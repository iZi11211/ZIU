import { useFormContext, useFieldArray } from 'react-hook-form';

export default function Step2() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories',
  });

  const categoryError =
    (errors.categories as any)?.message ||
    (errors.categories as any)?.root?.message;

  return (
    <div className="step2">

      {/* ================= CATEGORIES ================= */}
      <div className="step2__block">

        <label className="step2__label">
          Kategorie *
        </label>

        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">

            <input
              id={`category-${index}`}
              className="register__input"
              placeholder={`Kategoria ${index + 1}`}
              aria-required="true"
              aria-invalid={!!errors.categories?.[index]}
              aria-describedby={`category-${index}-error`}
              {...register(`categories.${index}` as const)}
            />

            <button
              type="button"
              aria-label={`Usuń kategorię ${index + 1}`}
              onClick={() => remove(index)}
            >
              Usuń
            </button>

          </div>
        ))}

        <button
          type="button"
          aria-label="Dodaj kategorię"
          onClick={() => append('')}
        >
          + Dodaj kategorię
        </button>

        {/* GLOBAL ERROR (min 1 category) */}
        {categoryError && (
          <span
            role="alert"
            className="register__error"
          >
            {categoryError}
          </span>
        )}

      </div>

      {/* ================= NOTIFICATIONS ================= */}
      <div className="step2__block">

        <label className="step2__label">
          Powiadomienia
        </label>

        <label className="step2__checkbox">
          <input
            type="checkbox"
            aria-describedby="notif-email-help"
            {...register('notifications.email')}
          />
          Email
        </label>

        <label className="step2__checkbox">
          <input
            type="checkbox"
            aria-describedby="notif-push-help"
            {...register('notifications.push')}
          />
          Push
        </label>

      </div>

      {/* ================= NEWSLETTER ================= */}
      <div className="step2__block">

        <label className="step2__checkbox">
          <input
            type="checkbox"
            {...register('newsletter')}
          />
          Newsletter (opcjonalnie)
        </label>

      </div>

    </div>
  );
}