import { useRef } from 'react';
import { FocusTrap } from './components/FocusTrap';

export const ConfirmDeleteModal = ({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <FocusTrap onEscape={onClose} triggerRef={triggerRef}>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 id="modal-title">Usuń zadanie?</h2>

          <p>Czy na pewno chcesz usunąć to zadanie?</p>

          <div className="flex gap-2 mt-4">
            <button onClick={onConfirm}>Usuń</button>
            <button onClick={onClose}>Anuluj</button>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};