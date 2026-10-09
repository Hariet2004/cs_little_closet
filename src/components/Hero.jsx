import styles from './Hero.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'
const mosaicLeft  = ['/images/item4.jpg', '/images/item8.jpg', '/images/item12.jpg']
const mosaicRight = ['/images/item5.jpg', '/images/item11.jpg', '/images/item9.jpg']

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        {/* ── Text side ── */}
        <div className={styles.text}>
          <div className={styles.badge}>🧸 Nairobi's Favourite Kids' Thrift</div>

          <h1 className={styles.heading}>
            Little outfits,<br />
            <em className={styles.pop}>big cuteness.</em>
          </h1>

          <p className={styles.lead}>
            Affordable, quality thrifted clothing for babies and kids.
            Curated with love — priced for every parent.
          </p>

          <div className={styles.btns}>
            <a href="#shop" className={styles.btnFill}>Browse the Closet</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              Instagram ↗
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.stat}>
              <strong>38+</strong>
              <span>Items Listed</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <strong>KSh 200</strong>
              <span>Starting From</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <strong>100%</strong>
              <span>Quality Checked</span>
            </div>
          </div>
        </div>

        {/* ── Image mosaic ── */}
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
