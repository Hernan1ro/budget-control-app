const NuevoPresupuesto = () => {
  return (
    <div className="contendor-presupuesto contenedor sombra">
      <form action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            placeholder="Añade tu presupuesto"
            type="text"
            className="nuevo-presupuesto"
          />
          <input type="submit" value="Añadir" />
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
