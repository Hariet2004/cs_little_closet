import { useCallback, useEffect, useMemo, useState } from 'react'
import { products as seedProducts } from '../data/products'
import { C_KEY, CRED_KEY, DEFAULT_CONFIG, DEFAULT_CREDENTIALS, P_KEY, load, save } from './defaults'
import { StoreContext } from './StoreContext'

function nextId(list) {
  return list.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1
}

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(() => load(P_KEY, seedProducts))
  const [config, setConfig] = useState(() => ({ ...DEFAULT_CONFIG, ...load(C_KEY, {}) }))
  const [credentials, setCredentials] = useState(() => ({ ...DEFAULT_CREDENTIALS, ...load(CRED_KEY, {}) }))

  useEffect(() => { save(P_KEY, products) }, [products])
  useEffect(() => { save(C_KEY, config) }, [config])
  useEffect(() => { save(CRED_KEY, credentials) }, [credentials])

  const addProduct = useCallback((data) => {
    setProducts(prev => [{ ...data, id: nextId(prev), addedAt: Date.now() }, ...prev])
  }, [])

  const updateProduct = useCallback((id, patch) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...patch } : p)))
  }, [])

  const removeProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }, [])

  const toggleSold = useCallback((id) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, sold: !p.sold } : p)))
  }, [])

  const setWaNumber = useCallback((waNumber) => {
    setConfig(prev => ({ ...prev, waNumber }))
  }, [])

  const changeCredentials = useCallback((patch) => {
    setCredentials(prev => ({ ...prev, ...patch }))
  }, [])

  const exportData = useCallback(() => ({
    version: 1,
    exportedAt: new Date().toISOString(),
    config,
    products,
  }), [config, products])

  const importData = useCallback((data) => {
    const list = Array.isArray(data) ? data : data?.products
    if (!Array.isArray(list)) throw new Error('No products found in file')
    const cleaned = list.map((p, i) => ({
      id: Number(p.id) || i + 1,
      name: String(p.name || 'Untitled').trim(),
      size: String(p.size || 'Ask us'),
      price: p.price === null || p.price === undefined || p.price === '' ? null : Number(p.price),
      originalPrice: p.originalPrice == null ? null : Number(p.originalPrice),
      image: String(p.image || ''),
      category: String(p.category || 'sets'),
      badge: p.badge || null,
      sold: Boolean(p.sold),
      addedAt: Number(p.addedAt) || Date.now(),
    }))
    setProducts(cleaned)
    if (data && !Array.isArray(data) && data.config && typeof data.config === 'object') {
      setConfig(prev => ({ ...prev, ...data.config }))
    }
  }, [])

  const resetAll = useCallback(() => {
    setProducts(seedProducts.map(p => ({ ...p })))
    setConfig({ ...DEFAULT_CONFIG })
    setCredentials({ ...DEFAULT_CREDENTIALS })
  }, [])

  const value = useMemo(() => ({
    products,
    config,
    credentials,
    addProduct,
    updateProduct,
    removeProduct,
    toggleSold,
    setWaNumber,
    changeCredentials,
    exportData,
    importData,
    resetAll,
  }), [products, config, credentials, addProduct, updateProduct, removeProduct, toggleSold, setWaNumber, changeCredentials, exportData, importData, resetAll])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
