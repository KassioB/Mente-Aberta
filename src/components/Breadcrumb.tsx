import React from 'react'

export function Breadcrumb() {
  return (
    <nav
      className="text-white py-3 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#007FBA' }}
    >
      <ul className="flex items-center gap-2 text-sm">
        <li>
          <a href="https://kassiob.github.io/mental/" className="hover:underline" rel="noopener noreferrer">
            Início
          </a>
        </li>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <li className="font-medium">Mapa da Saúde Mental de Alagoas</li>
      </ul>
    </nav>
  )
}
