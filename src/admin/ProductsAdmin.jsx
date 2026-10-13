import { useMemo, useState } from 'react'
import { useStore } from '../store/StoreContext'
import { categories, sortProducts } from '../data/products'
import ProductForm from './ProductForm'
import styles from './AdminApp.module.css'

const money = n => `KSh ${n.toLocaleString()}`

export default function ProductsAdmin({ editing, setEditing }) {
  const { products, toggleSold, removeProduct } = useStore()
  const [cat, setCat] = useState('all')
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    const filtered = cat === 'all' ? products : products.filter(p => p.category === cat)
    const searched = query.trim()
      ? filtered.filter(p => `${p.name} ${p.size} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase()))
      : filtered
    return sortProducts(searched, 'newest')
  }, [products, cat, query])

  function handleDelete(p) {
    if (window.confirm(`Delete "${p.name}" (${p.size})? This cannot be undone.`)) {
      removeProduct(p.id)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <div>
          <span className={styles.eyebrow}>Inventory</span>
          <h1 className={styles.pageTitle}>Products</h1>
        </div>
        <button className={styles.btnPrimary} onClick={() => setEditing('new')}>+ Add Product</button>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.filterBar}>
          {categories.map(c => (
            <button
              key={c.key}
              className={`${styles.tab} ${cat === c.key ? styles.tabOn : ''}`}
              onClick={() => setCat(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <input
          className={styles.search}
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search name, size or category…"
        />
      </div>

      <p className={styles.resultCount}>{list.length} item{list.length !== 1 ? 's' : ''} shown</p>

      {list.length === 0 ? (
        <p className={styles.empty}>No products match your filters.</p>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {list.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className={styles.cellItem}>
                      <img src={p.image} alt="" className={styles.thumb} />
                      <div>
                        <strong>{p.name}</strong>
                        <span className={styles.cellSub}>Size: {p.size}</span>
                      </div>
                    </div>
                  </td>
                  <td><span className={styles.catChip}>{p.category}</span></td>
                  <td>{p.price !== null ? money(p.price) : <em className={styles.dm}>DM for price</em>}</td>
                  <td>
                    <button
                      className={`${styles.statusBtn} ${p.sold ? styles.soldOn : ''}`}
                      onClick={() => toggleSold(p.id)}
                    >
                      {p.sold ? 'Sold' : 'Available'}
                    </button>
                  </td>
                  <td>
                    <div className={styles.rowActions}>
                      <button className={styles.btnSmall} onClick={() => setEditing(p)}>Edit</button>
                      <button className={`${styles.btnSmall} ${styles.danger}`} onClick={() => handleDelete(p)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <ProductForm
          product={editing === 'new' ? null : editing}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  )
}
