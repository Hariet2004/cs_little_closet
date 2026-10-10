import styles from './Footer.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}><em>CS</em> Little Closet</span>
          <p className={styles.tagline}>Handpicked thrifted clothing for babies and kids in Nairobi.</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4 className={styles.colHead}>Quick Links</h4>
            <a href="#shop">Shop</a>
            <a href="#how">How to Order</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colHead}>Follow Us</h4>
            <a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/254796868984" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} CS Little Closet · Nairobi, Kenya · Made with 🩷 for little ones
      </div>
    </footer>
  )
}
