
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
)

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.03 24 18.06 24 12.07z" />
  </svg>
)

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" />
  </svg>
)

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    icon: FacebookIcon,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/',
    icon: WhatsAppIcon,
  },
]

const quickLinks = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Banho & Tosa', href: '#servicos' },
  { label: 'Clínica Veterinária', href: '#veterinario' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-alice-blue text-baltic-blue border-baltic-blue-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Marca e Sobre o Petshop */}
          <div className="space-y-4 lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/src/assets/logo.png"
                alt="Logo da PetMania"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold tracking-tight text-baltic-blue">
                Pet<span className="text-baltic-blue-600">Mania</span> Petshop
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-baltic-blue">
              Cuidando do seu melhor amigo com carinho, produtos selecionados e
              atendimento especializado para o bem-estar do seu pet.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-baltic-blue-300 text-pale-sky-500 transition-all duration-300 hover:-translate-y-1 hover:bg-baltic-blue-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-slate-200">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-baltic-blue">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition-colors hover:text-baltic-blue-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato do Petshop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-slate-200">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-baltic-blue">
              <li className="flex items-start gap-3">
                <a
                  href="tel:+551133334444"
                  className="transition-colors hover:text-baltic-blue-300"
                >
                  (11) 3333-4444
                </a>
              </li>
              <li className="flex items-start gap-3">
                <a
                  href="mailto:contato@amigofiel.com.br"
                  className="break-all transition-colors hover:text-baltic-blue-300"
                >
                  contato@petmania.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span>Av. Paulista, 1100 – São Paulo, SP</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Seg a Sáb, das 08h às 19h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior: Direitos Autorais e Voltar ao Topo */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-baltic-blue-300 pt-6 text-xs text-pale-sky-200 sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Petmania Petshop. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-baltic-blue-300 px-3 py-1.5 text-pale-sky-500 transition-colors hover:bg-baltic-blue-500 hover:text-white"
          >
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
