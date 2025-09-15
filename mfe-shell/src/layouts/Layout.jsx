import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
