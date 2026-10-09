import styles from './ProductCard.module.css'

const IG = 'https://www.instagram.com/cs_little_closet/'

export default function ProductCard({ product }) {
  const { name, size, price, image, badge } = product

  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={image} alt={name} className={styles.img} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.size}>Size: {size}</p>

        <div className={styles.foot}>
          <div className={styles.price}>
            {price !== null
              ? <><sup>KSh</sup>{price.toLocaleString()}</>
              : <span className={styles.dmPrice}>DM for price</span>
            }
          </div>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            DM to Buy
          </a>
        </div>
      </div>
    </article>
  )
}
