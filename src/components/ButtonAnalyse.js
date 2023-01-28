import { useAnalyse } from "../hooks/useAnalyse";
import styles from "@/styles/ButtonAnalyse.module.css";

const ButtonAnalyse = () => {
  const { handleAnalyse } = useAnalyse();

  return (
    <button onClick={handleAnalyse} className={styles.buttonAnalyse}>
      Analizar
    </button>
  );
};

export default ButtonAnalyse;
