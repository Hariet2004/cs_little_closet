import styles from './Contact.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'
const WA = 'https://wa.me/254796868984'

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
    handle: '+254 796 868984',
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

export default function Contact() {
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
