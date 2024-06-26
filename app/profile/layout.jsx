import BarraInferior from '@/components/BarraInferior'
import React from 'react'

const LayoutApp = ({children}) => {
  return (
    <div>
        {children}
        <BarraInferior />
    </div>
  )
}

export default LayoutApp