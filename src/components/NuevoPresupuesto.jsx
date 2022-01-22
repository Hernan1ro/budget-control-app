import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState();

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (Number(presupuesto) < 0) {
      setMensaje("No es un presupueto válido");
    } else {
      console.log("Presupuesto establecido");
    }
  };

  return (
    <div className="contendor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Añade tu presupuesto"
            type="number"
            className="nuevo-presupuesto"
          />
          <input type="submit" value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
