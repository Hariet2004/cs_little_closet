import styles from './ProductCard.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function ProductCard({ product }) {
  const { name, size, price, image, badge } = product

  return (
    <a
      href={IG}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {/* Image */}
      <div className={styles.imgWrap}>
        <img src={image} alt={name} className={styles.img} />

        {/* Dark overlay on hover */}
        <div className={styles.overlay} />

        {/* Slide-up CTA */}
        <div className={styles.cta}>DM to Buy 📩</div>

        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      {/* Info */}
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.size}>Size: {size}</p>
        <div className={styles.price}>
          {price !== null
            ? <><sup>KSh</sup> {price.toLocaleString()}</>
            : <span className={styles.dm}>DM for price</span>
          }
        </div>
      </div>
    </a>
  )
}
