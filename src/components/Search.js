import React, { useContext, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { urls } from "../services/urls";
import { helpHttp } from "../services/helpHttp";
import styles from "@/styles/Search.module.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const { loading, setLoading, setAlert, setUser } = useContext(GeneralContext);

  const handlerSearch = async (e) => {
    try {
      //Eliminar el @
      e.preventDefault();

      if (search === "") return false;

      setLoading(true);
      const data = await helpHttp().get(`${urls().search}/${search}`);
      // console.log(data)

      if (data.error) {
        setAlert({
          type: "error",
          message: data.error,
        });
        return false;
      }

      //Almacenamos el usuario
      setAlert({
        type: "info",
        message: "Usuario encontrado",
      });
      setUser({
        id: data.id,
        name: data.name,
        username: data.username,
        createdAt: data.createdAt,
        avatar: data.avatar,
        metrics: data.metrics,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setSearch("");
      setLoading(false);
    }
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.formSearch}>
        <input
          className={styles.inputSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Introduce username"
        />
        <button
          className={styles.buttonForm}
          type="submit"
          disabled={loading}
          onClick={handlerSearch}
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Search;
