import styles from './Footer.module.css'
import { useStore } from '../store/StoreContext'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function Footer() {
  const { config } = useStore()
  const WA = `https://wa.me/${config.waNumber}`

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}><em>CS</em> Little Closet</span>
          <p className={styles.tagline}>Kids Thrift. Nairobi.</p>
        </div>

        <nav className={styles.links}>
          <a href="#shop">Shop</a>
          <a href="#how">How It Works</a>
          <a href="#about">About</a>
          <a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="#/admin">Admin</a>
        </nav>

        <div className={styles.right}>
          <p className={styles.copy}>© {new Date().getFullYear()} CS Little Closet</p>
          <p className={styles.built}>Built by <a href="https://hariet-wambui-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">HK Web Studios</a></p>
        </div>
      </div>
    </footer>
  )
}
