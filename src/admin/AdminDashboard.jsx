import { useMemo } from 'react'
import { useStore } from '../store/StoreContext'
import styles from './AdminApp.module.css'

const money = n => `KSh ${n.toLocaleString()}`

export default function AdminDashboard({ onAdd, onBrowse, onSettings }) {
  const { products, config } = useStore()

  const stats = useMemo(() => {
    const available = products.filter(p => !p.sold)
    const sold = products.filter(p => p.sold)
    const priced = available.filter(p => p.price !== null)
    const dmPrice = available.filter(p => p.price === null).length
    const lowest = priced.length ? Math.min(...priced.map(p => p.price)) : null
    const cats = new Set(products.map(p => p.category)).size
    return {
      total: products.length,
      available: available.length,
      sold: sold.length,
      dmPrice,
      lowest,
      cats,
    }
  }, [products])

  const recent = useMemo(() => [...products].sort((a, b) => b.addedAt - a.addedAt).slice(0, 4), [products])

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <div>
          <span className={styles.eyebrow}>Overview</span>
          <h1 className={styles.pageTitle}>Dashboard</h1>
        </div>
        <div className={styles.headActions}>
          <button className={styles.btnPrimary} onClick={onAdd}>+ Add Product</button>
          <button className={styles.btnGhost} onClick={onBrowse}>Manage Products</button>
        </div>
      </div>

      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Pieces</span>
          <strong className={styles.statValue}>{stats.total}</strong>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Available</span>
          <strong className={`${styles.statValue} ${styles.teal}`}>{stats.available}</strong>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Sold</span>
          <strong className={`${styles.statValue} ${styles.pink}`}>{stats.sold}</strong>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>DM for Price</span>
          <strong className={styles.statValue}>{stats.dmPrice}</strong>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Lowest Price</span>
          <strong className={styles.statValue}>{stats.lowest !== null ? money(stats.lowest) : '—'}</strong>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Categories</span>
          <strong className={styles.statValue}>{stats.cats}</strong>
        </div>
      </div>

      <div className={styles.panelGrid}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Recently Added</h2>
          <ul className={styles.recentList}>
            {recent.map(p => (
              <li key={p.id} className={styles.recentItem}>
                <img src={p.image} alt="" className={styles.recentThumb} />
                <div className={styles.recentInfo}>
                  <strong>{p.name}</strong>
                  <span>{p.size} · {p.price !== null ? money(p.price) : 'DM for price'}</span>
                </div>
                {p.sold && <span className={styles.soldChip}>Sold</span>}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Order Contact</h2>
          <p className={styles.panelText}>
            Buy buttons and contact cards on the storefront open WhatsApp chats to this number.
          </p>
          <div className={styles.waBox}>
            <span className={styles.waLabel}>WhatsApp number</span>
            <strong className={styles.waNumber}>+{config.waNumber}</strong>
          </div>
          <p className={styles.panelNote}>Change it under <button className={styles.linkBtn} onClick={onSettings}>Settings</button>.</p>
        </section>
      </div>
    </div>
  )
}
