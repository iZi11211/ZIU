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

        {fields.map((field, index) => {
          const fieldError =
            Array.isArray(errors.categories)
              ? errors.categories[index]
              : undefined;

          return (
            <div
              key={field.id}
              className="flex gap-2 mb-2"
            >
              <input
                id={`category-${index}`}
                className="register__input"
                placeholder={`Kategoria ${index + 1}`}

                aria-required="true"

                aria-invalid={!!fieldError}

                aria-describedby={
                  fieldError
                    ? `category-${index}-error`
                    : undefined
                }

                {...register(
                  `categories.${index}` as const
                )}
              />

              <button
                type="button"
                aria-label={`Usuń kategorię ${index + 1}`}
                onClick={() => remove(index)}
              >
                Usuń
              </button>

              {fieldError?.message && (
                <span
                  id={`category-${index}-error`}
                  role="alert"
                  className="register__error"
                >
                  {String(fieldError.message)}
                </span>
              )}
            </div>
          );
        })}

        <button
          type="button"
          aria-label="Dodaj kategorię"
          onClick={() => append('')}
        >
          + Dodaj kategorię
        </button>

        {categoryError && (
          <span
            role="alert"
            className="register__error"
          >
            {String(categoryError)}
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
            {...register(
              'notifications.email'
            )}
          />
          Email
        </label>

        <label className="step2__checkbox">
          <input
            type="checkbox"
            {...register(
              'notifications.push'
            )}
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