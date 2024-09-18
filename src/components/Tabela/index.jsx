import React from "react";
import styles from "./Tabela.module.css";

const Tabela = ({ imc }) => {
  const mostraClassificacaoImc = (min, max) => {
    const imcNum = parseFloat(imc);
    if (!isNaN(imcNum) && imcNum >= min && (max === null || imcNum <= max)) {
      return styles.destacaCampo;
    }
    return "";
  };
  return (
    <div className="container" data-aos="fade-down">
      <h2 className={styles.h2}>Tabela de resultado de IMC</h2>
      <table border="0" cellSpacing="0" className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Resultado</th>
            <th className={styles.th}>Situação</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={mostraClassificacaoImc(-Infinity, 17)}>
            <td className={styles.td}>Abaixo de 17</td>
            <td className={styles.td}>Muito abaixo do peso</td>
          </tr>
          <tr className={mostraClassificacaoImc(17, 18.49)}>
            <td className={styles.td}>Entre 17 e 18,49</td>
            <td className={styles.td}>Abaixo do peso</td>
          </tr>
          <tr className={mostraClassificacaoImc(18.5, 24.99)}>
            <td className={styles.td}>Entre 18,5 e 24,99</td>
            <td className={styles.td}>Peso normal</td>
          </tr>
          <tr className={mostraClassificacaoImc(25, 29.99)}>
            <td className={styles.td}>Entre 25 e 29,99</td>
            <td className={styles.td}>Acima do peso</td>
          </tr>
          <tr className={mostraClassificacaoImc(30, 34.99)}>
            <td className={styles.td}>Entre 30 e 34,99</td>
            <td className={styles.td}>Obesidade 1</td>
          </tr>
          <tr className={mostraClassificacaoImc(35, 39.99)}>
            <td className={styles.td}>Entre 35 e 39,99</td>
            <td className={styles.td}>Obesidade 2 (severa)</td>
          </tr>
          <tr className={mostraClassificacaoImc(40, null)}>
            <td className={styles.td}>Acima de 40</td>
            <td className={styles.td}>Obesidade 3 (mórbida)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
