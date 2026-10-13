import styles from './Contact.module.css'
import { useStore } from '../store/StoreContext'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function Contact() {
  const { config } = useStore()
  const WA = `https://wa.me/${config.waNumber}`
  const waHandle = `+${config.waNumber.replace(/(\d{3})(\d{3})(\d{3,6})/, '$1 $2 $3')}`

  const channels = [
    {
      icon: '📸',
      title: 'Instagram',
      desc: 'Browse latest drops and DM to order',
      handle: '@cs_little_closet',
      href: IG,
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      desc: 'Chat with us directly, fast replies',
      handle: waHandle,
      href: WA,
    },
    {
      icon: '💳',
      title: 'M-Pesa',
      desc: 'Pay fast the Kenyan way',
      handle: 'Details sent on order',
      href: null,
    },
  ]

  return (
    <section className={styles.section} id="contact">
      <span className={styles.eyebrow}>Get In Touch</span>
      <h2 className={styles.title}>Ready to shop</h2>
      <p className={styles.sub}>
        Send us a message and we will get back to you quickly.
      </p>

      <div className={styles.channels}>
        {channels.map(ch =>
          ch.href ? (
            <a
              key={ch.title}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.iconWrap}>
                <span className={styles.iconEmoji}>{ch.icon}</span>
              </div>
              <h4 className={styles.chTitle}>{ch.title}</h4>
              <p className={styles.chDesc}>{ch.desc}</p>
              <span className={styles.handle}>{ch.handle}</span>
            </a>
          ) : (
            <div key={ch.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.iconEmoji}>{ch.icon}</span>
              </div>
              <h4 className={styles.chTitle}>{ch.title}</h4>
              <p className={styles.chDesc}>{ch.desc}</p>
              <span className={styles.handle}>{ch.handle}</span>
            </div>
          )
        )}
      </div>
    </section>
  )
}
