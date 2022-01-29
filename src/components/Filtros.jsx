import { useEffect, useState } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="">Filtrar gastos</label>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            name=""
            id=""
          >
            <option value="">Todas las categorias</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="subscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
