import React, { useState } from 'react'

const ListBicicletaComponent = () => {

  const [bicicletas, setbicicletas] = useState([] )

  return (
    <div className="container">
      <h2 className='text-center'>Lista de bicicletas para arrendar</h2>
      <table className='table table-bordered table-striped'>
        <thead>
          <th>Id</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Aro</th>
          <th>Tipo</th>
          <th>Color</th>
          <th>Estado</th>
          <th>Precio Arriendo</th>
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