import React, { useEffect, useRef } from 'react'
import { mount } from 'order/mount' 

export default function OrderRemote() {
  const ref = useRef(null)

  useEffect(() => {
    let cleanup
    if (ref.current) {
      mount(ref.current).then((cleanupFn) => {
        cleanup = cleanupFn
      }).catch(error => {
        console.error('Failed to mount order app:', error)
      })
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
