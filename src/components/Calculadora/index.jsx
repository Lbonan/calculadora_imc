import { useState } from "react";

const Calculadora = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const mostraResultado = () => {
    let pesoNum = parseFloat(peso);
    let alturaNum = parseFloat(altura.replace(",", "."));

    if (!isNaN(pesoNum) && !isNaN(alturaNum) && alturaNum > 0) {
      return (pesoNum / (alturaNum * alturaNum)).toFixed(2);
    } else {
      return "valores inválidos";
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Digite seu peso"
        value={peso}
        onChange={(ev) => {
          setPeso(ev.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Digite sua altura"
        value={altura}
        onChange={(ev) => {
          setAltura(ev.target.value);
        }}
      />
      <p>IMC: {mostraResultado()}</p>
    </form>
  );
};

export default Calculadora;
