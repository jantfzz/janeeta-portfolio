import { Suspense } from 'react'
// page transitions placeholder available via AnimatePresence in main.tsx
import { Layout } from './components/layout/Layout'

function App() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <Layout />
    </Suspense>
  )
}

export default App
