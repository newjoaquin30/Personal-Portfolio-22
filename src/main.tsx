import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import login from './login.tsx'
import register from './register.tsx'
import dashboard from './pages/dashboard.tsx'
import projects from './pages/projects.tsx'
import languages from './pages/languages.tsx'
import certificates from './pages/certificates.tsx'
import settings from './assets/settings.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/sign-in",
    Component: login
  },
  {
    path: "/sign-up",
    Component: register
  },
  {
    path: "/dashboard/my/",
    Component: dashboard
  },
  {
    path: "/projects/my/",
    Component: projects
  },
  {
    path: "/languages/my/",
    Component: languages
  },
  {
    path: "/certificates/my/",
    Component: certificates
  },
  {
    path: "/settings",
    Component: settings
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
