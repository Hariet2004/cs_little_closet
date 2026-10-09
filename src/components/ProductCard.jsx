import styles from './ProductCard.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function ProductCard({ product }) {
  const { name, size, price, image, badge } = product

  return (
    <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={image} alt={name} className={styles.img} />
        <div className={styles.overlay} />
        <div className={styles.cta}>DM to Reserve 📩</div>

        {/* Arrow price tag on the right edge */}
        {price !== null ? (
          <div className={styles.priceTag}>
            <sup>KSh</sup>{price.toLocaleString()}
          </div>
        ) : (
          <div className={styles.priceTagDm}>DM for price</div>
        )}

        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.size}>Size · {size}</p>
      </div>
    </a>
  )
}
