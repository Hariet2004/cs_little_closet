import styles from './ProductCard.module.css'
import { useStore } from '../store/StoreContext'

function waLink(waNumber, name, size, price) {
  const priceStr = price ? `KSh ${price.toLocaleString()}` : 'price TBD'
  const text = `Hi CS Little Closet! I'm interested in:\n*${name}* (Size: ${size}) - ${priceStr}\nIs it still available?`
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`
}

export default function ProductCard({ product, eager }) {
  const { config } = useStore()
  const { name, size, price, image, badge, category, sold } = product

  function handleWa(e) {
    e.preventDefault()
    e.stopPropagation()
    if (!sold) window.open(waLink(config.waNumber, name, size, price), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`${styles.card} ${sold ? styles.isSold : ''}`} onClick={handleWa}>

      {/* Image */}
      <div className={styles.imgWrap}>
        <img src={image} alt={name} className={styles.img} loading={eager ? 'eager' : 'lazy'} />

        {/* Hover overlay with sliding WA button */}
        {!sold && (
          <div className={styles.overlay}>
            <span className={styles.overlayBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.531 5.855L.057 23.215a.75.75 0 0 0 .921.921l5.36-1.474A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 0 1-4.964-1.362l-.357-.213-3.705 1.019 1.019-3.705-.213-.357A9.707 9.707 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
              </svg>
              Buy via WhatsApp
            </span>
          </div>
        )}

        {sold && <div className={styles.soldStamp}>SOLD</div>}

        {/* Category tag top-left */}
        {category && (
          <span className={styles.catTag}>{category}</span>
        )}

        {/* Special badge top-right */}
        {badge && (
          <span className={styles.badge} data-badge={badge}>{badge}</span>
        )}

        {/* Price tag */}
        {!sold && price !== null ? (
          <div className={styles.priceTag}>
            <sup>KSh</sup>{price.toLocaleString()}
          </div>
        ) : !sold ? (
          <div className={styles.priceTagDm}>DM for price</div>
        ) : null}
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.meta}>
          {price !== null ? (
            <span className={styles.price}>KSh {price.toLocaleString()}</span>
          ) : (
            <span className={styles.dmPrice}>DM for price</span>
          )}
          <span className={styles.size}>{size}</span>
        </div>
        {sold && <div className={styles.soldLabel}>Sold</div>}
      </div>
    </div>
  )
}
