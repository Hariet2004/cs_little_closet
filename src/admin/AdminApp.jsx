import { useState } from 'react'
import { useStore } from '../store/StoreContext'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'
import ProductsAdmin from './ProductsAdmin'
import AdminSettings from './AdminSettings'
import styles from './AdminApp.module.css'

const TABS = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'products',  label: 'Products'  },
  { key: 'settings',  label: 'Settings'  },
]

export default function AdminApp() {
  const { credentials } = useStore()
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('cslc.admin.session') === '1')
  const [tab, setTab] = useState('dashboard')
  const [editing, setEditing] = useState(null)

  if (!unlocked) return <AdminLogin credentials={credentials} onSuccess={() => setUnlocked(true)} />

  function lock() {
    sessionStorage.removeItem('cslc.admin.session')
    setUnlocked(false)
  }

  function goProducts(newItem) {
    setEditing(newItem)
    setTab('products')
  }

  return (
    <div className={styles.admin}>
      <header className={styles.topbar}>
        <span className={styles.brand}><em>CS</em> Little Closet · Admin</span>

        <nav className={styles.tabs}>
          {TABS.map(t => (
            <button
              key={t.key}
              className={`${styles.tab} ${tab === t.key ? styles.tabOn : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className={styles.topActions}>
          <a href="/" className={styles.btnGhost}>View Storefront</a>
          <button className={styles.btnGhost} onClick={lock}>Lock</button>
        </div>
      </header>

      <main className={styles.content}>
        {tab === 'dashboard' && <AdminDashboard onAdd={() => goProducts('new')} onBrowse={() => setTab('products')} onSettings={() => setTab('settings')} />}
        {tab === 'products' && <ProductsAdmin editing={editing} setEditing={setEditing} />}
        {tab === 'settings' && <AdminSettings />}
      </main>
    </div>
  )
}
