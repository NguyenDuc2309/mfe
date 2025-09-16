import React, { useEffect, useRef } from 'react'
import { mount } from 'product/mount' 

export default function ProductRemote() {
  const ref = useRef(null)

  useEffect(() => {
    let cleanup
    if (ref.current) {
      cleanup = mount(ref.current)
    }
    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div>
      <div ref={ref}></div>
    </div>
  )
}
