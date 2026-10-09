import { useState } from 'react'
import ProductCard from './ProductCard'
import { products, categories } from '../data/products'
import styles from './ProductGrid.module.css'

export default function ProductGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active)

  return (
    <section className={styles.section} id="shop">
      <div className={styles.header}>
        <span className={styles.eyebrow}>The Closet</span>
        <h2 className={styles.title}>Browse &amp; Shop</h2>
        <p className={styles.sub}>
          DM us on Instagram to reserve any piece. All prices in KSh.
        </p>
      </div>

      <div className={styles.tabs}>
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

      <div className={styles.grid}>
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
