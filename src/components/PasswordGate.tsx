import { useState, useEffect } from 'react';

const PASSWORD = 'yankeehotelfoxtrot';
const STORAGE_KEY = 'dzk_auth';

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setUnlocked(true);
  }, []);

  function attempt() {
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        animation: shake ? 'dzk-shake 0.45s ease' : undefined,
      }}>
        <style>{`
          @keyframes dzk-shake {
            0%,100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-5px); }
            80% { transform: translateX(5px); }
          }
        `}</style>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--ink-faint)',
          letterSpacing: '0.01em',
          margin: 0,
        }}>
          David Zarraga Kelly
        </p>

        <div style={{
          width: '32px',
          height: '1px',
          background: 'var(--border)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <input
            autoFocus
            type="password"
            value={value}
            placeholder="passphrase"
            onChange={e => { setValue(e.target.value); setError(false); }}
            onKeyDown={e => e.key === 'Enter' && attempt()}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 300,
              letterSpacing: '0.12em',
              width: '220px',
              padding: '0.6rem 1rem',
              border: `1px solid ${error ? '#c0392b' : 'var(--border)'}`,
              borderRadius: '3px',
              background: 'var(--bg-card)',
              color: 'var(--ink)',
              outline: 'none',
              textAlign: 'center',
              transition: 'border-color 0.2s',
            }}
          />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            color: error ? '#c0392b' : 'transparent',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            margin: 0,
            transition: 'color 0.2s',
            userSelect: 'none',
          }}>
            incorrect
          </p>
        </div>

        <button
          onClick={attempt}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '2px',
            transition: 'color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.borderBottomColor = 'var(--ink)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--ink-faint)';
            e.currentTarget.style.borderBottomColor = 'var(--border)';
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}