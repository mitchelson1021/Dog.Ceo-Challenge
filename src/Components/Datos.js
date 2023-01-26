import React, {useState, useEffect} from "react";

const Datos = () => {
    const [razas, setRazas] = useState([]);
    const [buscar, setBuscar] = useState("");

    const url2 = "https://jsonplaceholder.typicode.com/users";

    const url = "https://dog.ceo/api/breeds/list/all";

    const captura = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setRazas(data)
    }
console.log(razas)

const razas_arr = Object.entries(razas);
//razas_arr.map(([estado, raza]) => {
//    return `${estado} ${raza}`
//});
//console.log(razas_arr)



//Filtro de Busqueda



    useEffect(() => {
        captura();
    },[]);
    
    

    return(
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Name</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    { razas_arr.map( ([estado, raza]) => (
                        <tr key={estado.status}>
                            <td>{estado.status}</td>
                            <td>{raza.message}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Datos
