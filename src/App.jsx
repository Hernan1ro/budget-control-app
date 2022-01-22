import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
    console.log(gastos);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />
      {isValidPresupuesto ? (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      ) : null}
      {modal && (
        <Modal
          guardarGasto={guardarGasto}
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </div>
  );
}

export default App;
