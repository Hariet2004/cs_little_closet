import styles from './Hero.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'
const mosaicLeft  = ['/images/item4.jpg', '/images/item8.jpg', '/images/item12.jpg']
const mosaicRight = ['/images/item5.jpg', '/images/item11.jpg', '/images/item9.jpg']

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
            Hand-picked thrifted clothing for babies and kids in Nairobi.
            Every piece quality-checked. Every price made for real parents.
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
              <strong>One-off</strong>
              <span>Each Item Unique</span>
            </div>
          </div>
        </div>

        {/* ── Mosaic ── */}
        <div className={styles.mosaic}>
          <div className={styles.col}>
            {mosaicLeft.map((src, i) => (
              <div key={i} className={`${styles.tile} ${i === 1 ? styles.square : styles.portrait}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <div className={`${styles.col} ${styles.colOffset}`}>
            {mosaicRight.map((src, i) => (
              <div key={i} className={`${styles.tile} ${i === 0 ? styles.square : styles.portrait}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
