import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [porcentaje, setPorcentaje] = useState(20);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    // Calcular porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - (presupuesto - totalGastado)) / presupuesto) *
      100
    ).toFixed(2);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
    setDisponible(presupuesto - totalGastado);
    setGastado(totalGastado);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar value={porcentaje} />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
