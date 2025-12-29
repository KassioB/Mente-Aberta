import React from "react"
import { Header } from "./Header"
import { Breadcrumb } from "./Breadcrumb"
import { Footer } from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
