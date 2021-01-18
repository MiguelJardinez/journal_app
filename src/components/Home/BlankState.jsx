import React from 'react'

const BlankState = () => {
  return (
    <div className="nothing__main-content">
      <h1>No hay nada en la pantalla para mostrar</h1>
      <div className="nothing__actions">
        <p>Seleciona una entrada</p>
        <div className="nothing__new-entry">
          <p>Crea una nueva</p>
          <button>AQUÍ</button>
        </div>
      </div>
      <i className="far fa-star fa-4x mt-5"></i>
    </div>
  )
}

export default BlankState
