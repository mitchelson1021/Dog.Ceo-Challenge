import React from 'react'
import Datos from '../Components/Datos'
import Filter from './Filter'
import TablaRazas from '../Components/TablaRazas'


const Section2 = () => {
    return(
        <div>
            <div className='container'>
            <div className='row '>
                <div className='col-md-4 '>
                    <h2>
                        Encuentra tu mascota favorita!
                    </h2>
                    <div className='filter '>
                    <h2>Filtro</h2>
                    <div><Filter /> </div>
                    <div><Datos /></div>
                    
                    </div>

                </div>
                <div className='col-md-8'>
                    <h2>
                        lorem
                    </h2>
                    
                    <div className='imagenes'>

                    </div>
                    

                </div>
            </div>
            
        </div>
        </div>
        
    )
}

export default Section2