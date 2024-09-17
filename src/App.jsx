import { useState } from "react";
import Calculadora from "./components/Calculadora";
import Tabela from "./components/Tabela";

function App() {
  const [imc, setImc] = useState(null);

  const mudaImc = (novoImc) => {
    setImc(novoImc);
  };

  return (
    <>
      <Calculadora mudaImc={mudaImc} />
      {imc !== null && !isNaN(imc) && (
        <>
          <p className="p">IMC: {imc}</p>
          <Tabela />
        </>
      )}
    </>
  );
}

export default App;
