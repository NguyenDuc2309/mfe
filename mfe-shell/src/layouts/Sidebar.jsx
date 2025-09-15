import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-52 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li><Link className="block hover:text-blue-600" to="/">Dashboard</Link></li>
          <li><Link className="block hover:text-blue-600" to="/products">Products</Link></li>
          <li><Link className="block hover:text-blue-600" to="/orders">Orders</Link></li>
          <li><Link className="block hover:text-blue-600" to="/users">Users</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
