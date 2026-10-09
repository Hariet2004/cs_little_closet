import styles from './Hero.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.float} aria-hidden="true">🧸</span>
      <span className={styles.float} aria-hidden="true">👗</span>
      <span className={styles.float} aria-hidden="true">🩷</span>
      <span className={styles.float} aria-hidden="true">✨</span>

      <div className={styles.inner}>
        <div className={styles.badge}>📍 Nairobi, Kenya · Delivery Available</div>

        <h1 className={styles.heading}>
          Little outfits,<br />
          <span className={styles.pop}>big cuteness.</span>
        </h1>

        <p className={styles.lead}>
          Affordable, quality thrifted clothing for babies and kids.
          Curated with love, priced for every parent.
        </p>

        <div className={styles.btns}>
          <a href="#shop" className={styles.btnFill}>Browse the Closet 👘</a>
          <a href="#how" className={styles.btnOutline}>How to Order</a>
        </div>

        <div className={styles.pills}>
          <div className={styles.pill}>
            <strong>100%</strong>
            <span>Quality Checked</span>
          </div>
          <div className={styles.pill}>
            <strong>KSh 200+</strong>
            <span>Starting From</span>
          </div>
          <div className={styles.pill}>
            <strong>Nairobi</strong>
            <span>Based &amp; Delivering</span>
          </div>
        </div>
      </div>
    </section>
  )
}
