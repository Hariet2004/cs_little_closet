import { WA_NUMBER } from '../data/products'

export const P_KEY = 'cslc.products.v1'
export const C_KEY = 'cslc.config.v1'
export const CRED_KEY = 'cslc.credentials.v1'

export const DEFAULT_CONFIG = { waNumber: WA_NUMBER }
export const DEFAULT_CREDENTIALS = {
  email: 'admin@cslittlecloset.com',
  password: 'admin123',
}

export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const parsed = JSON.parse(raw)
    if (Array.isArray(fallback) && !Array.isArray(parsed)) return fallback
    if (!Array.isArray(fallback) && (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed))) return fallback
    return parsed
  } catch {
    return fallback
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}
