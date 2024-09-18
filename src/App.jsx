import { useEffect, useState } from "react";
import Calculadora from "./components/Calculadora";
import Tabela from "./components/Tabela";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [imc, setImc] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const mudaImc = (novoImc) => {
    setImc(novoImc);
  };

  return (
    <>
      <Calculadora mudaImc={mudaImc} />
      {imc !== null && (
        <>
          <p className="p">IMC: {imc}</p>
          <Tabela imc={imc} />
        </>
      )}
    </>
  );
}

export default App;
