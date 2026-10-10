import styles from './Hero.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'
// left col: portrait then square | right col: square then portrait (Natasha stagger)
const heroLeft  = ['/images/item17.jpg', '/images/item29.jpg']
const heroRight = ['/images/item14.jpg', '/images/item31.jpg']

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        {/* ── Text ── */}
        <div className={styles.text}>
          <div className={styles.label}>Nairobi · Kids Thrift Store</div>

          <h1 className={styles.heading}>Little outfits,</h1>
          <span className={styles.headingSub}>big cuteness.</span>

          <p className={styles.lead}>
            Handpicked thrifted clothing for babies and kids in Nairobi.
            Every piece is quality checked. Every price made for real parents.
          </p>

          <div className={styles.btns}>
            <a href="#shop" className={styles.btnFill}>Browse Finds →</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              DM on Instagram
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.stat}>
              <strong>38+</strong>
              <span>Pieces Listed</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <strong>KSh 200</strong>
              <span>Lowest Price</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <strong>Unique</strong>
              <span>Each Item One of a Kind</span>
            </div>
          </div>
        </div>

        {/* ── Staggered image grid (Natasha layout) ── */}
        <div className={styles.mosaic}>
          <div className={styles.col}>
            <div className={`${styles.tile} ${styles.portrait}`}>
              <img src={heroLeft[0]} alt="" />
            </div>
            <div className={`${styles.tile} ${styles.square}`}>
              <img src={heroLeft[1]} alt="" />
            </div>
          </div>
          <div className={`${styles.col} ${styles.colOffset}`}>
            <div className={`${styles.tile} ${styles.square}`}>
              <img src={heroRight[0]} alt="" />
            </div>
            <div className={`${styles.tile} ${styles.portrait}`}>
              <img src={heroRight[1]} alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
