import { useEffect, useState } from 'react'
import { useStore } from '../store/StoreContext'
import { categories } from '../data/products'
import styles from './AdminApp.module.css'
import form from './ProductForm.module.css'

const BADGES = ['New In', 'Deal', 'Party', 'Unique', 'Fun']
const CAT_OPTIONS = categories.filter(c => c.key !== 'all')

function emptyForm() {
  return { name: '', size: '', price: '', category: 'dresses', badge: '', sold: false, image: '' }
}

function toForm(p) {
  return {
    name: p.name,
    size: p.size === 'Ask us' ? '' : p.size,
    price: p.price === null ? '' : String(p.price),
    category: p.category,
    badge: p.badge || '',
    sold: p.sold,
    image: p.image,
  }
}

function readImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      const img = new Image()
      img.onerror = reject
      img.onload = () => {
        const MAX = 900
        const scale = Math.min(1, MAX / Math.max(img.width, img.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.max(1, Math.round(img.width * scale))
        canvas.height = Math.max(1, Math.round(img.height * scale))
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', 0.82))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

export default function ProductForm({ product, onClose }) {
  const { addProduct, updateProduct } = useStore()
  const isEdit = Boolean(product)
  const [f, setF] = useState(() => (product ? toForm(product) : emptyForm()))
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function set(key, value) {
    setF(prev => ({ ...prev, [key]: value }))
  }

  async function onFile(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    setError('')
    setBusy(true)
    try {
      const dataUrl = await readImage(file)
      set('image', dataUrl)
    } catch {
      setError('Could not read that image. Try another file.')
    } finally {
      setBusy(false)
    }
  }

  function submit(e) {
    e.preventDefault()
    const name = f.name.trim()
    if (!name) { setError('Item name is required.'); return }
    if (!f.image) { setError('Add a photo: upload a file or paste an image URL.'); return }

    const data = {
      name,
      size: f.size.trim() || 'Ask us',
      price: f.price === '' ? null : Math.max(0, Number(f.price)),
      originalPrice: product ? (product.originalPrice ?? null) : null,
      image: f.image.trim(),
      category: f.category,
      badge: f.badge || null,
      sold: f.sold,
    }

    if (isEdit) updateProduct(product.id, data)
    else addProduct(data)
    onClose()
  }

  return (
    <div className={form.backdrop} onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <form className={form.modal} onSubmit={submit}>
        <div className={form.head}>
          <h2 className={form.title}>{isEdit ? 'Edit Product' : 'New Product'}</h2>
          <button type="button" className={form.x} onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className={form.grid}>
          <div className={form.thumbCol}>
            <div className={form.preview}>
              {f.image
                ? <img src={f.image} alt="Preview" />
                : <span className={form.previewEmpty}>No photo yet</span>}
            </div>

            <label className={form.label}>Photo</label>
            <input type="file" accept="image/*" className={styles.input} onChange={onFile} />
            <span className={form.or}>or paste an image URL</span>
            <input
              className={styles.input}
              type="text"
              value={f.image.startsWith('data:') ? '' : f.image}
              onChange={e => set('image', e.target.value)}
              placeholder="/images/item1.jpg"
            />
            <span className={form.hint}>Uploads are resized and stored in this browser. Use a URL for images already in /public/images.</span>
          </div>

          <div className={form.fields}>
            <label className={form.label}>Item name *</label>
            <input
              className={styles.input}
              value={f.name}
              onChange={e => set('name', e.target.value)}
              placeholder="e.g. Floral Dress"
            />

            <div className={form.row}>
              <div>
                <label className={form.label}>Size</label>
                <input
                  className={styles.input}
                  value={f.size}
                  onChange={e => set('size', e.target.value)}
                  placeholder="e.g. 3 years (blank = Ask us)"
                />
              </div>
              <div>
                <label className={form.label}>Price (KSh)</label>
                <input
                  className={styles.input}
                  type="number"
                  min="0"
                  value={f.price}
                  onChange={e => set('price', e.target.value)}
                  placeholder="Blank = DM for price"
                />
              </div>
            </div>

            <div className={form.row}>
              <div>
                <label className={form.label}>Category</label>
                <select className={styles.input} value={f.category} onChange={e => set('category', e.target.value)}>
                  {CAT_OPTIONS.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className={form.label}>Badge</label>
                <select className={styles.input} value={f.badge} onChange={e => set('badge', e.target.value)}>
                  <option value="">None</option>
                  {BADGES.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>

            <label className={form.check}>
              <input type="checkbox" checked={f.sold} onChange={e => set('sold', e.target.checked)} />
              <span>Mark as sold</span>
            </label>

            {error && <p className={form.error}>{error}</p>}

            <div className={form.actions}>
              <button type="button" className={`${styles.btnGhost} ${form.cancelBtn}`} onClick={onClose}>Cancel</button>
              <button type="submit" className={styles.btnPrimary} disabled={busy}>{isEdit ? 'Save Changes' : 'Add Product'}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
