import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const getLinkClasses = (path) => {
    const baseClasses = "block px-3 py-2 rounded-md transition-colors"
    const activeClasses = "bg-blue-600 text-white"
    const inactiveClasses = "text-gray-700 hover:bg-gray-200 hover:text-blue-600"
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  return (
    <aside className="w-52 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-1">
          <li>
            <Link className={getLinkClasses('/')} to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className={getLinkClasses('/products')} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={getLinkClasses('/orders')} to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className={getLinkClasses('/users')} to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
