import React from 'react'
import Link from "next/link";

const BarraInferior = () => {
  return (
    <nav className="bg-blue-950 w-full absolute bottom-0 h-16 flex items-center justify-around  gap-x-2" >
        <Link href="/" className="bg-blue-100 py-3 px-1 w-[140px] text-center text-blue-950 font-semibold rounded-md"> Inicio </Link>
        <Link href="/register" className="bg-blue-100 py-3 px-1 w-[140px] text-center text-blue-950 font-semibold rounded-md"> Registro </Link>
        <Link href="/loguin" className="bg-blue-100 py-3 px-1 w-[140px] text-center text-blue-950 font-semibold rounded-md"> Loguin </Link>
        <Link href="/dashboard" className="bg-blue-100 py-3 px-1 w-[140px] text-center text-blue-950 font-semibold rounded-md">Dashboard </Link>
        <Link href="/profile" className="bg-blue-100 py-3 px-1 w-[140px] text-center text-blue-950 font-semibold rounded-md"> Profile </Link>
      </nav>
  )
}

export default BarraInferior