import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductRemote() {
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    let cleanup

    async function loadRemote() {
      try {
        const { mount } = await import("product/mount") 
        if (ref.current) {
          cleanup = mount(ref.current)
        }
      } catch (err) {
        console.error("❌ Failed to mount remote app:", err)
        navigate("/notfound")
      }
    }

    loadRemote()

    return () => cleanup?.()
  }, [navigate])

  return <div ref={ref}></div>
}
