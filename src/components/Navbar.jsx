import { useState } from 'react'
import styles from './Navbar.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        <em>CS</em> Little Closet
      </a>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="#shop" onClick={() => setOpen(false)}>Shop</a></li>
        <li><a href="#how" onClick={() => setOpen(false)}>How to Order</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li>
          <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Shop Now
          </a>
        </li>
      </ul>

      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={open ? styles.x : ''} />
      </button>
    </nav>
  )
}
