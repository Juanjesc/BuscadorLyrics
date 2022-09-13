import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext()
const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState(false)
    const busquedaLetra = (busqueda) => {
  
            
        setCargando(true)

        try {
            const options = {
              method: 'GET',
              url: `https://lyrics-plus.p.rapidapi.com/lyrics/${busqueda.cancion}/${busqueda.artista}`,
              headers: {
                'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
                'X-RapidAPI-Host': `${import.meta.env.VITE_API_HOST}`
                
              }
            };
            axios.request(options).then(function (response) {
              setLetra(response.data.lyrics)
              setAlerta('')
              console.log(response.data.lyrics);
            })
            
        } catch (error) {
            setAlerta('Canción no encontrada')
            setLetra('')
            console.error(error);  
        } 
        setCargando(false)
        
        //
        
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta: alerta,
                setAlerta: setAlerta,
                busquedaLetra,
                letra: letra,
                cargando: cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext