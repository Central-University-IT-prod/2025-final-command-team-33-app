
import { RootLayout } from '$/layouts/root'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => <RootLayout><Outlet /></RootLayout>,
})
