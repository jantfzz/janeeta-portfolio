import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const Home = () => import('./pages/Home').then((m) => ({ Component: m.Home }))
const Portfolio = () => import('./pages/Portfolio').then((m) => ({ Component: m.Portfolio }))
const Research = () => import('./pages/Research').then((m) => ({ Component: m.Research }))
const Contact = () => import('./pages/Contact').then((m) => ({ Component: m.Contact }))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, lazy: Home },
      { path: 'portfolio', lazy: Portfolio },
      { path: 'research', lazy: Research },
      { path: 'contact', lazy: Contact },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
