import styles from "@/styles/ButtonGraph.module.css";

const ButtonGraph = ({ isIntersecting, targetRef }) => {
  const handleMove = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className={
          !isIntersecting ? styles.buttonGraph : styles.buttonGraphHidden
        }
        onClick={handleMove}
      >
        Resultados
      </button>
    </>
  );
};

export default ButtonGraph;
