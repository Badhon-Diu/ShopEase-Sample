export default function Header({setisshowcartmodal , carts }) {
  return (
    <>
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 px-20 rounded-sm text-white p-7 flex justify-between items-center shadow-lg">
        <div className="text-4xl font-bold tracking-wide">ShopEase</div>
        <div className="flex items-center space-x-6">
          <nav className="space-x-6 text-2xl">
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Profile
            </a>
            <a
            onClick={()=>setisshowcartmodal(true)}
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Cart <span className="text-xs absolute ml-2">{carts.length}</span>
            </a>
          </nav>
          <label className="swap swap-rotate flex gap-4 justify-center">
            <input type="checkbox" id="theme-toggle" className="hidden" />
            <div className="swap-on text-yellow-300">🌙</div>
            <div className="swap-off text-yellow-300">☀️</div>
          </label>
        </div>
      </header>
    </>
  );
}
