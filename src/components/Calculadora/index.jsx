import { useState } from "react";
import styles from "./Calculadora.module.css";

const Calculadora = ({ mudaImc }) => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const calculaImc = () => {
    let pesoNum = parseFloat(peso);
    let alturaNum = parseFloat(altura.replace(",", "."));

    if (!isNaN(pesoNum) && !isNaN(alturaNum) && alturaNum > 0) {
      return (pesoNum / (alturaNum * alturaNum)).toFixed(2);
    } else {
      return "valores inválidos";
    }
  };

  const exibeResulado = () => {
    const resultadoImc = calculaImc();
    mudaImc(resultadoImc);
  };

  return (
    <form className="container">
      <h1>Calculadora de IMC</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite seu peso"
        value={peso}
        onChange={(ev) => {
          setPeso(ev.target.value);
        }}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="Digite sua altura"
        value={altura}
        onChange={(ev) => {
          setAltura(ev.target.value);
        }}
      />
      <button type="button" className={styles.button} onClick={exibeResulado}>
        Calcular
      </button>
    </form>
  );
};

export default Calculadora;
