import React from 'react';
import Datos from './Datos';

function TablaRazas(props) {
    const razas = Object.entries(props.razas.message).map(([raza, subraza])=>{
        return (
            <tr key={raza}>
                <td>{raza}</td>
                <td>subraza.join(', ')</td>
            </tr>
        )
    });
    return (
        <table>
            <thead>
                <tr>RAZA</tr>
                <tr>SUBRAZA</tr>
            </thead>
            <tbody>
                {razas}
            </tbody>
        </table>
    );
}

export default TablaRazas