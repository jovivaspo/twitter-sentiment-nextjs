import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import TweetsContainer from "./TweetsContainer";
import styles from "@/styles/Username.module.css";

const Username = () => {
  const { user } = useContext(GeneralContext);
  const date = new Date(user.createdAt);
  const months = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    0: "Diciembre",
  };
  const month = date.getUTCMonth();
  const year = date.getFullYear();

  return (
    <div className={styles.usernameContainer}>
      <img
        src={user.avatar}
        className={styles.avatar}
        width={100}
        alt="Avatar"
      />
      <h4>{user.name}</h4>
      <p className={styles.username}>@{user.username}</p>
      <span className={styles.createdAt}>
        Creado en {months[month]} de {year}
      </span>
      <div className={styles.metricsContainer}>
        <span className={styles.metrics}>
          {user.metrics.following_count} Siguiendo
        </span>
        <span className={styles.metrics}>
          {user.metrics.followers_count} Seguidores
        </span>
      </div>
      <TweetsContainer />
    </div>
  );
};

export default Username;
