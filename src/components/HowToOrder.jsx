import styles from './HowToOrder.module.css'

const steps = [
  { num: '01', icon: '👀', title: 'Browse Items',       desc: 'Scroll through our shop or check our Instagram for the latest drops.', color: 'warm' },
  { num: '02', icon: '📩', title: 'DM to Reserve',      desc: 'Send a direct message on Instagram with the item name and size.',        color: 'teal' },
  { num: '03', icon: '💸', title: 'Pay via M-Pesa',     desc: "We'll share our M-Pesa details. Your order is confirmed once payment clears.", color: 'warm' },
  { num: '04', icon: '🚚', title: 'Pickup or Delivery', desc: 'Collect in Nairobi or we arrange delivery for a small fee.',            color: 'teal' },
]

export default function HowToOrder() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.box}>
        <span className={styles.eyebrow}>Ordering</span>
        <h2 className={styles.title}>How to get your order</h2>
        <p className={styles.sub}>Shopping with us takes just a few messages.</p>

        <div className={styles.steps}>
          {steps.map(step => (
            <div key={step.num} className={styles.step}>
              {/* Giant decorative number */}
              <div className={styles.numDecor}>{step.num}</div>

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
