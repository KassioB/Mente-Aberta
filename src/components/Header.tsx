import Logo from "../assets/mente-aberta-logo.png"

export function Header() {
  return (
    <header
      className="text-white py-4 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#02629C' }}
    >
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Logo" width={32} height={32} className="w-8 h-8" loading="eager" />
        <h1 className="text-xl ml-10 md:text-2xl font-bold text-balance">MAPA DA SAÚDE MENTAL DE ALAGOAS</h1>
      </div>
    </header>
  )
}
