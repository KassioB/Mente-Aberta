import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/mente-aberta-logo.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="text-white py-4 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#02629C' }}
    >
      <div className="flex items-center gap-6 relative">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-ml-2 p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {isOpen && (
            <>
              {/* Overlay para fechar ao clicar fora */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              ></div>
              
              <div className="absolute left-0 mt-2 w-64 p-2 bg-white rounded-xl shadow-2xl border-none z-20">
                <div className="p-2 mb-2 bg-sky-300 rounded-xl border-b border-gray-100">
                  <p className="text-xs font-semibold text-sky-800 uppercase tracking-wider">Navegação</p>
                </div>
                <a
                  href="https://kassiob.github.io/Mente-Aberta/"
                  className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Ir para Cartilha
                </a>
                <a
                  href="#mapa"
                  className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Mapa da Saúde Mental
                </a>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" width={32} height={32} className="w-8 h-8" loading="eager" />
          <h1 className="text-xl ml-4 md:text-2xl font-bold text-balance">MAPA DA SAÚDE MENTAL DE ALAGOAS</h1>
        </div>
      </div>
    </header>
  )
}