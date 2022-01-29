import React, { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setMensaje(gastoEditar.mensaje);
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, [gastoEditar]);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad <= 0) {
      setMensaje("La cantidad debe ser mayor a $ 0");
      return;
    }
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        action=""
      >
        <legend>
          {gastoEditar.nombre ? "Editar Registro" : "Añade un nuevo gasto"}
        </legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade el cantidad: Ej. $3000"
            value={cantidad}
            onChange={(e) => {
              setCantidad(Number(e.target.value));
            }}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          >
            <option value="">Selecciona una categoria</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="subscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
          </select>
        </div>
        <input
          type="submit"
          value={gastoEditar.nombre ? "Guardar cambios" : "Añadir gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
