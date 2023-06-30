import React, { useState, useEffect } from 'react'
import { BicicletaService } from '../services/BicicletaService';



const ListBicicletaComponent = () => {

  const [bicicletas, setbicicletas] = useState([] )

  useEffect(() => {
    
      BicicletaService.getAllBicicletas().then((response) => {
        setbicicletas(response.data);
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      })
  }, [])
  

  return (
    <div className="container">
      <h2 className='text-center'>Lista de bicicletas para arrendar</h2>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Aro</th>
            <th>Tipo</th>
            <th>Color</th>
            <th>Estado</th>
            <th>Precio Arriendo</th>
          </tr>
        </thead>
        <tbody>
          {
            bicicletas.map(
              bicicleta => 
              <tr key={bicicleta.id}>
                <td>{bicicleta.id}</td>
                <td>{bicicleta.marca}</td>
                <td>{bicicleta.modelo}</td>
                <td>{bicicleta.aro}</td>
                <td>{bicicleta.tipo}</td>
                <td>{bicicleta.color}</td>
                <td>{bicicleta.estado}</td>
                <td>{bicicleta.precioArr}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListBicicletaComponent