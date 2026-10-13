import { useRef, useState } from 'react'
import { useStore } from '../store/StoreContext'
import styles from './AdminApp.module.css'

export default function AdminSettings() {
  const { config, credentials, setWaNumber, changeCredentials, exportData, importData } = useStore()

  const [wa, setWa] = useState(config.waNumber)
  const [waMsg, setWaMsg] = useState('')

  const [cur, setCur] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [next, setNext] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loginMsg, setLoginMsg] = useState('')

  const [dataMsg, setDataMsg] = useState('')
  const fileRef = useRef(null)

  function saveWa(e) {
    e.preventDefault()
    const cleaned = wa.replace(/[^\d]/g, '')
    if (!cleaned) { setWaMsg('Enter a valid number (digits only).'); return }
    setWaNumber(cleaned)
    setWa(cleaned)
    setWaMsg('Saved. Storefront buttons now use this number.')
  }

  function saveLogin(e) {
    e.preventDefault()
    if (cur !== credentials.password) { setLoginMsg('Current password is incorrect.'); return }

    const patch = {}
    const email = newEmail.trim()
    if (email) {
      if (!email.includes('@')) { setLoginMsg('That email address is not valid.'); return }
      patch.email = email
    }
    if (next) {
      if (next.length < 4) { setLoginMsg('New password must be at least 4 characters.'); return }
      if (next !== confirm) { setLoginMsg('New passwords do not match.'); return }
      patch.password = next
    }
    if (!patch.email && !patch.password) { setLoginMsg('Enter a new email or password first.'); return }

    changeCredentials(patch)
    setCur(''); setNewEmail(''); setNext(''); setConfirm('')
    setLoginMsg('Admin login updated.')
  }

  function download() {
    const blob = new Blob([JSON.stringify(exportData(), null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `cs-little-closet-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(a.href)
    setDataMsg('Backup downloaded.')
  }

  async function onImport(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    try {
      const data = JSON.parse(await file.text())
      if (!window.confirm('Restoring replaces all current products with the backup file. Continue?')) return
      importData(data)
      setDataMsg('Backup restored.')
    } catch {
      setDataMsg('That file could not be read. Expected a JSON backup.')
    } finally {
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <div>
          <span className={styles.eyebrow}>Configuration</span>
          <h1 className={styles.pageTitle}>Settings</h1>
        </div>
      </div>

      <div className={styles.settingsGrid}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>WhatsApp Number</h2>
          <p className={styles.panelText}>Used by every “Buy via WhatsApp” button and contact card.</p>
          <form className={styles.inlineForm} onSubmit={saveWa}>
            <input
              className={styles.input}
              value={wa}
              onChange={e => setWa(e.target.value)}
              placeholder="254796868984"
            />
            <button type="submit" className={styles.btnPrimary}>Save</button>
          </form>
          {waMsg && <p className={styles.success}>{waMsg}</p>}
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Admin Login</h2>
          <p className={styles.panelText}>The email and password used to sign in to this page.</p>
          <form className={styles.stackForm} onSubmit={saveLogin}>
            <input className={styles.input} type="password" value={cur} onChange={e => setCur(e.target.value)} placeholder="Current password" />
            <input className={styles.input} type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="New email" />
            <input className={styles.input} type="password" value={next} onChange={e => setNext(e.target.value)} placeholder="New password" />
            <input className={styles.input} type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm new password" />
            <button type="submit" className={styles.btnPrimary}>Update Login</button>
          </form>
          {loginMsg && <p className={styles.success}>{loginMsg}</p>}
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Backup &amp; Data</h2>
          <p className={styles.panelText}>
            Your products and settings are saved in this browser on this device.
            Download a backup regularly so you never lose your inventory, for example
            when switching to a new phone or laptop.
          </p>
          <div className={styles.dataActions}>
            <button className={styles.btnGhost} onClick={download}>Download Backup</button>
            <button className={styles.btnGhost} onClick={() => fileRef.current && fileRef.current.click()}>Restore Backup</button>
            <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={onImport} />
          </div>
          <p className={styles.panelNote}>
            “Restore Backup” replaces everything with the contents of a backup file,
            so download a fresh one first if you are unsure.
          </p>
          {dataMsg && <p className={styles.success}>{dataMsg}</p>}
        </section>
      </div>
    </div>
  )
}
