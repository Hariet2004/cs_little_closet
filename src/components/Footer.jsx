import styles from './Footer.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} CS Little Closet &nbsp;·&nbsp; Nairobi, Kenya
        &nbsp;·&nbsp; Made with 🩷 for little ones
      </p>
      <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.ig}>
        @cs_little_closet
      </a>
    </footer>
  )
}
