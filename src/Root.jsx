import { useEffect, useState } from 'react'
import App from './App.jsx'
import AdminApp from './admin/AdminApp.jsx'
import { StoreProvider } from './store/store.jsx'

function isAdminRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash.startsWith('admin')) return true
  const path = window.location.pathname.replace(/^\/+/, '')
  return path.startsWith('admin')
}

export default function Root() {
  const [admin, setAdmin] = useState(isAdminRoute)

  useEffect(() => {
    const onChange = () => setAdmin(isAdminRoute())
    window.addEventListener('hashchange', onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])

  return (
    <StoreProvider>
      {admin ? <AdminApp /> : <App />}
    </StoreProvider>
  )
}
