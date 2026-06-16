import { motion } from 'framer-motion';

export default function Spinner() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
      }}
      role="status"
      aria-label="Ładowanie"
    >
      <motion.div
        style={{
          width: 22,
          height: 22,
          border: '3px solid #ccc',
          borderTop: '3px solid #1976d2',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: 'linear',
        }}
      />

      <span style={{ fontSize: 14 }}>Ładowanie...</span>
    </div>
  );
}