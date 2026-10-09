import styles from './HowToOrder.module.css'

const steps = [
  { icon: '👀', title: 'Browse Items',      desc: 'Scroll through our shop or check our Instagram for the latest drops.',      color: 'warm' },
  { icon: '📩', title: 'DM to Reserve',     desc: 'Send a direct message on Instagram with the item name and size.',            color: 'teal' },
  { icon: '💸', title: 'Pay via M-Pesa',    desc: "We'll share our M-Pesa details. Your order is confirmed once payment clears.", color: 'warm' },
  { icon: '🚚', title: 'Pickup or Delivery', desc: 'Collect in Nairobi or we arrange delivery for a small fee.',                color: 'teal' },
]

export default function HowToOrder() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.box}>
        <span className={styles.eyebrow}>Ordering</span>
        <h2 className={styles.title}>How to get your order</h2>
        <p className={styles.sub}>Shopping with us takes just a few messages.</p>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={`${styles.icon} ${styles[step.color]}`}>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
