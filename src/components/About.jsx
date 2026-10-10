import styles from './About.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'
const WA = 'https://wa.me/254796868984'

const tags = [
  { label: 'Thrifted & Curated', warm: true  },
  { label: 'Nairobi Based',      warm: false },
  { label: 'M-Pesa Accepted',    warm: false },
]

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        <div className={styles.art} aria-hidden="true">
          <span>🧸👶🏽👗</span>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Our Story</span>
          <h2 className={styles.title}>
            Dressing little ones without the big price tag
          </h2>
          <p className={styles.body}>
            CS Little Closet started with one simple idea: every child deserves
            to look adorable, and every parent deserves affordable options.
            Kids grow so fast and good clothing should not go to waste.
          </p>
          <p className={styles.body}>
            We personally pick every thrifted piece in Nairobi, checking for quality,
            freshness, and cuteness before it ever makes it to our page.
            What you see is what you get.
          </p>

          <div className={styles.tags}>
            {tags.map(t => (
              <span
                key={t.label}
                className={`${styles.tag} ${t.warm ? styles.warm : styles.teal}`}
              >
                {t.label}
              </span>
            ))}
          </div>

          <div className={styles.btns}>
            <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              Follow on Instagram ↗
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnFill}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
