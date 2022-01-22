const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  return (
    <div className="contendor-presupuesto contenedor sombra">
      <form action="" className="formulario">
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
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
