import React, { useState, useContext, useRef, useEffect } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { helpHttp } from "../services/helpHttp";
import { urls } from "../services/urls";
import Tweet from "./Tweets";
import styles from "@/styles/TweetsContainer.module.css";

const TweetsContainer = () => {
  const [time, setTime] = useState("7");
  const { user, setLoading, setAlert, setTweets, tweets, loading } =
    useContext(GeneralContext);
  const button7Ref = useRef();
  const button30Ref = useRef();

  useEffect(() => {
    handlerLoadTweets();
  }, [time, user]);

  const handlerLoadTweets = async () => {
    try {
      setTweets([]);
      if (time === "7") {
        button7Ref.current.classList.add("buttonSelect");
        button7Ref.current.innerText = "Última semana ";
        button30Ref.current.classList.remove("buttonSelect");
        button30Ref.current.innerText = "Último mes";
      } else {
        button30Ref.current.classList.add("buttonSelect");
        button30Ref.current.innerText = "Último mes ";
        button7Ref.current.classList.remove("buttonSelect");
        button7Ref.current.innerText = "Última semana";
      }

      setLoading(true);
      const data = await helpHttp().get(`${urls().tweets}/${user.id}/${time}`);

      if (data.error) {
        setAlert({
          type: "error",
          message: data.error,
        });
        return false;
      }

      setAlert({
        type: "info",
        message: "Tweets cargados",
      });

      setTweets(data.tweets);
      if (time === "7") {
        button7Ref.current.innerText =
          "Última semana " + `(${data.tweets.length})`;
        button30Ref.current.innerText = "Último mes";
      } else {
        button30Ref.current.innerText =
          "Último mes " + `(${data.tweets.length})`;
        button7Ref.current.innerText = "Última semana";
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.containerMainTweets}>
      <div className={styles.selectButtons}>
        <button
          ref={button7Ref}
          className={styles.buttonTweets}
          onClick={() => {
            if (loading) return false;
            setTime("7");
          }}
        >
          Última semana
        </button>
        <button
          ref={button30Ref}
          className={styles.buttonTweets}
          onClick={() => {
            if (loading) return false;
            setTime("30");
          }}
        >
          Último mes
        </button>
      </div>
      {tweets.length > 0 && (
        <div className="containerTweets">
          {tweets.map((tweet, id) => {
            return <Tweet key={id} tweet={tweet} />;
          })}
        </div>
      )}
    </div>
  );
};

export default TweetsContainer;
