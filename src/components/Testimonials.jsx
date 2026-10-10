import styles from './Testimonials.module.css'

const reviews = [
  {
    quote: "I got my daughter the floral dress and she absolutely loves it. The quality is amazing for a thrifted piece. Everyone keeps asking where I bought it!",
    name: "Aisha M.",
    purchased: "Floral Dress",
  },
  {
    quote: "CS Little Closet is my go-to for my boys. Good prices, great quality and Harriet responds so fast on WhatsApp. Will definitely be back for more!",
    name: "Grace W.",
    purchased: "Kids Trousers & Shorts",
  },
  {
    quote: "The corduroy dungaree I ordered for my son arrived in perfect condition. Looks brand new! Love that I can dress my kid well without spending a fortune.",
    name: "Mercy N.",
    purchased: "Corduroy Dungaree",
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Happy Customers</span>
        <h2 className={styles.title}>What They Say</h2>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"{r.quote}"</p>
              <div className={styles.footer}>
                <strong className={styles.name}>{r.name}</strong>
                <span className={styles.purchased}>Purchased: {r.purchased}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
