import React from 'react'

const Card = ({ nome, preco, imagem }) => {
  const precoFormatado =
    typeof preco === 'number'
      ? preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : preco

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-alice-blue-400 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Imagem do Produto */}
      <div className="relative h-52 w-full overflow-hidden bg-alice-blue-700">
        <img
          src={imagem}
          alt={nome}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-bold text-blue-slate-100 line-clamp-2">
            {nome}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-alice-blue-600 pt-4">
          <div>
            <span className="block text-xs text-blue-slate-500">Preço</span>
            <span className="text-xl font-extrabold text-baltic-blue">
              {precoFormatado}
            </span>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-baltic-blue px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-baltic-blue-400"
          >
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
