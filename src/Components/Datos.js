import React, {useState, useEffect} from "react";
import Filter from './Filter'



const Datos = () => {
    const [razas, setRazas] = useState([]);
    const [buscar, setBuscar] = useState("");

    const url = "https://dog.ceo/api/breeds/list/all";

    const captura = async () => {
        const response = await fetch(url);
        const razas = await response.json();
        //console.log(data);
        //setRazas(data)
        //const razas_arr = Object.entries(razas)
        const razas_arr = Object.entries(razas.message)
        console.log(razas_arr)
        
        //Pasar de Objeto a Arreglo
    
    
    }
    useEffect(() => {
        captura();
    },[]);
    
    return(
        <div>
            {}
           
        </div>
    );
}


export default Datos
