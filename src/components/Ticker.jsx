import styles from './Ticker.module.css'

const items = [
  '🆕 New Arrivals In',
  '📍 Nairobi Pickup Available',
  '👶 Kids Ages 0 – 10 Years',
  '✅ Quality Checked Every Piece',
  '💳 M-Pesa Accepted',
  '📩 DM on Instagram to Order',
  '🚚 Delivery Available',
  '🧸 Cute. Affordable. Thrifted.',
]

const repeated = [...items, ...items]

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item} <span className={styles.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
