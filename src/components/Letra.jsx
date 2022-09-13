import React from 'react'
import useLetras from '../hooks/useLetras'

const Letra = () => {
    const { letra, cargando } = useLetras()
  return (
    cargando ? <Spinner /> :
    <div>
        <p className='letra'>
            {letra}
        </p>
    </div>
  )
}

export default Letra