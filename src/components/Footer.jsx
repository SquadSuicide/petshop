import React from 'react'
import { PawPrint } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-baltic-blue-200 text-alice-blue border-t border-baltic-blue-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Marca e Sobre o Petshop */}
          <div className="space-y-4 lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-baltic-blue-500 text-white shadow-sm">
                <PawPrint className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Amigo<span className="text-baltic-blue-700">Fiel</span> Petshop
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-pale-sky-600">
              Cuidando do seu melhor amigo com carinho, produtos selecionados e
              atendimento especializado para o bem-estar do seu pet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer