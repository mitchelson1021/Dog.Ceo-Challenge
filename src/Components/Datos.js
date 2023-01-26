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

razas_arr.forEach(([estado, raza])=>{
    Object.entries(raza).forEach(([perros, subrazas])=>{

        console.log(`${perros}  ${subrazas}`)

    })
})


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
                    { razas_arr.map(([subrazas, perros]) => ( Object.entries(perros).map(([valor, clave])=>(
                    <tr key={valor}>
                            <td>{valor}</td>
                            <td>{clave}</td>
                        </tr>))
                        
                        
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Datos
