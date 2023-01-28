import { styleResults } from "../services/stylesResults";
import { useResults } from "../hooks/useResults";
import styles from "@/styles/ResumeResults.module.css";
import { category } from "../services/category";

const ResumeResults = () => {
  const { results } = useResults();

  return (
    <div className={styles.resumeResults}>
      <h2>Resultados</h2>
      <div className={styles.resultContainer}>
        {results?.map((el, index) => {
          return (
            <p
              className={styles.tag}
              key={index}
              style={{
                color: styleResults()[el.label].borderColor,
              }}
            >
              {el.label} : {el.percentege}
            </p>
          );
        })}
      </div>
      <p className={styles.message}>
        {results.length > 0 && styleResults()[category(results)].message}
      </p>
    </div>
  );
};

export default ResumeResults;
