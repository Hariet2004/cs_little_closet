import { useState } from 'react'
import ProductCard from './ProductCard'
import { products, categories, sortOptions, sortProducts } from '../data/products'
import styles from './ProductGrid.module.css'

export default function ProductGrid() {
  const [active, setActive] = useState('all')
  const [sort, setSort]   = useState('newest')

  const filtered = active === 'all' ? products : products.filter(p => p.category === active)
  const sorted   = sortProducts(filtered, sort)

  const available = sorted.filter(p => !p.sold)
  const sold      = sorted.filter(p => p.sold)
  const display   = [...available, ...sold]

  return (
    <section className={styles.section} id="shop">
      <div className={styles.header}>
        <span className={styles.eyebrow}>The Closet</span>
        <h2 className={styles.title}>Browse &amp; Shop</h2>
        <p className={styles.sub}>
          DM on Instagram or tap <strong>Buy via WhatsApp</strong> to reserve. All prices in KSh.
        </p>
      </div>

      {/* Dark pill filter bar */}
      <div className={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`${styles.tab} ${active === cat.key ? styles.on : ''}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sort bar (mybigorder idea) */}
      <div className={styles.toolbar}>
        <span className={styles.count}>
          {available.length} item{available.length !== 1 ? 's' : ''} available
        </span>
        <div className={styles.sortWrap}>
          <label htmlFor="sort-select" className={styles.sortLabel}>Sort:</label>
          <select
            id="sort-select"
            className={styles.sortSelect}
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {sortOptions.map(o => (
              <option key={o.key} value={o.key}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {display.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
