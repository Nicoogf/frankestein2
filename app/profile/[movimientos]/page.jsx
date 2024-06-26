import React from 'react'

const Registro = ({params}) => {
  return (
    <main className="h-[calc(100vh-64px)] bg-red-500">
        <h1>Pagina con la info del usuario : { params.movimientos } </h1>
    </main>
  )
}

export default Registro