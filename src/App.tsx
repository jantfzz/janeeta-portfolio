import { Suspense } from 'react'
import { Layout } from './components/layout/Layout'

function App() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <Layout />
    </Suspense>
  )
}

export default App
