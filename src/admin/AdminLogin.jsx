import { useState } from 'react'
import styles from './AdminApp.module.css'

const features = [
  { title: 'Nairobi Based',  desc: 'Pickup and delivery' },
  { title: 'Instagram',      desc: 'Latest drops and DMs' },
  { title: 'M-Pesa',         desc: 'Pay fast the Kenyan way' },
  { title: 'Quality Checked', desc: 'Every piece, by hand' },
]

export default function AdminLogin({ credentials, onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()
    const emailOk = email.trim().toLowerCase() === String(credentials.email).trim().toLowerCase()
    const passOk = password === credentials.password
    if (emailOk && passOk) {
      sessionStorage.setItem('cslc.admin.session', '1')
      onSuccess()
    } else {
      setError('Incorrect email or password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div className={styles.loginPage}>

      {/* ── Brand panel ── */}
      <aside className={styles.brandPanel}>
        <span className={styles.loginLogo}><em>CS</em> Little Closet</span>

        <div className={styles.brandBody}>
          <h1 className={styles.brandHeading}>
            Your little store,
            <br />
            beautifully managed.
          </h1>
          <p className={styles.brandText}>
            Update listings, mark pieces as sold, and keep your Nairobi
            kids thrift shop looking fresh from one simple dashboard.
          </p>

          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.brandCopy}>© {new Date().getFullYear()} CS Little Closet</p>
      </aside>

      {/* ── Sign in panel ── */}
      <main className={styles.formPanel}>
        <form className={styles.loginCard} onSubmit={submit}>
          <h2 className={styles.loginTitle}>Welcome back</h2>
          <p className={styles.loginSub}>Sign in to your admin account</p>

          <label className={styles.fieldLabel} htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            className={styles.input}
            value={email}
            onChange={e => { setEmail(e.target.value); setError('') }}
            placeholder="you@example.com"
            autoComplete="username"
            required
          />

          <label className={styles.fieldLabel} htmlFor="admin-password">Password</label>
          <div className={styles.pwWrap}>
            <input
              id="admin-password"
              type={show ? 'text' : 'password'}
              className={`${styles.input} ${styles.pwInput}`}
              value={password}
              onChange={e => { setPassword(e.target.value); setError('') }}
              placeholder="Your password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShow(s => !s)}
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>

          {error && <p className={styles.loginError}>{error}</p>}

          <button type="submit" className={styles.signInBtn}>Sign in</button>
        </form>

        <p className={styles.formCopy}>© {new Date().getFullYear()} CS Little Closet</p>
      </main>
    </div>
  )
}
