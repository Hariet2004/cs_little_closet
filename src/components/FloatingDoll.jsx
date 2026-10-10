import styles from './FloatingDoll.module.css'

function Bear({ className }) {
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ears */}
      <circle cx="22" cy="22" r="14" fill="#E8956D"/>
      <circle cx="78" cy="22" r="14" fill="#E8956D"/>
      <circle cx="22" cy="22" r="8"  fill="#F4A97A"/>
      <circle cx="78" cy="22" r="8"  fill="#F4A97A"/>
      {/* Head */}
      <circle cx="50" cy="38" r="30" fill="#E8956D"/>
      {/* Eyes */}
      <circle cx="38" cy="32" r="5"  fill="#3D1C02"/>
      <circle cx="62" cy="32" r="5"  fill="#3D1C02"/>
      <circle cx="39.5" cy="30.5" r="1.8" fill="#fff"/>
      <circle cx="63.5" cy="30.5" r="1.8" fill="#fff"/>
      {/* Nose */}
      <ellipse cx="50" cy="43" rx="7" ry="5" fill="#3D1C02"/>
      <ellipse cx="50" cy="42" rx="5" ry="3.5" fill="#5C2D0A"/>
      {/* Mouth */}
      <path d="M43 48 Q50 55 57 48" stroke="#3D1C02" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Blush */}
      <ellipse cx="30" cy="44" rx="7" ry="4" fill="#F9B8A0" opacity="0.55"/>
      <ellipse cx="70" cy="44" rx="7" ry="4" fill="#F9B8A0" opacity="0.55"/>
      {/* Body */}
      <ellipse cx="50" cy="84" rx="26" ry="24" fill="#E8956D"/>
      {/* Belly */}
      <ellipse cx="50" cy="84" rx="16" ry="14" fill="#F4A97A"/>
      {/* Arms */}
      <ellipse cx="18" cy="80" rx="10" ry="16" fill="#E8956D" transform="rotate(-15 18 80)"/>
      <ellipse cx="82" cy="80" rx="10" ry="16" fill="#E8956D" transform="rotate(15 82 80)"/>
      {/* Legs */}
      <ellipse cx="36" cy="104" rx="12" ry="8" fill="#E8956D"/>
      <ellipse cx="64" cy="104" rx="12" ry="8" fill="#E8956D"/>
    </svg>
  )
}

const bears = [
  { cls: styles.bear1, size: 70  },
  { cls: styles.bear2, size: 50  },
  { cls: styles.bear3, size: 60  },
  { cls: styles.bear4, size: 45  },
  { cls: styles.bear5, size: 65  },
]

export default function FloatingDoll() {
  return (
    <div aria-hidden="true">
      {bears.map((b, i) => (
        <div key={i} className={`${styles.wrap} ${b.cls}`}>
          <Bear className={styles.svg} style={{ width: b.size }} />
        </div>
      ))}
    </div>
  )
}
