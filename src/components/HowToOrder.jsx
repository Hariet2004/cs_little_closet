import styles from './HowToOrder.module.css'

const steps = [
  { num: '01', title: 'Browse & Pick',   desc: 'Scroll our shop or check Instagram @cs_little_closet for the latest drops. Find something you love?' },
  { num: '02', title: 'DM or WhatsApp',  desc: 'Send us a message with the item name and size. We reply fast and reserve it for you.' },
  { num: '03', title: 'Pay & Receive',   desc: 'Pay via M-Pesa once confirmed. Collect in Nairobi or we arrange delivery for a small fee.' },
]

export default function HowToOrder() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>How It Works</span>
        <h2 className={styles.title}>Ordering is easy</h2>
        <p className={styles.sub}>Shopping with us takes just a few messages.</p>

        <div className={styles.steps}>
          {steps.map(step => (
            <div key={step.num} className={styles.step}>
              <div className={styles.num}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
