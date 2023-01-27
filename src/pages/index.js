import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useContext, useRef } from "react";
import { GeneralContext } from "@/context/GeneralContext";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Username from "@/components/Username";
import ResumeResults from "@/components/ResumeResults";
import Graph from "@/components/Graph";
import ButtonAnalyse from "@/components/ButtonAnalyse";
import ButtonGraph from "@/components/ButtonGraph";
import Alert from "@/components/Alert";
import Spinner from "@/components/Spinner";
import { useObserver } from "@/hooks/useObserver";

export default function Home() {
  const { loading, user, tweets } = useContext(GeneralContext);

  const targetRef = useRef();

  const isIntersecting = useObserver(targetRef, {
    root: null,
    threshold: 0.3,
  });

  return (
    <div className={styles.App}>
      <div className={styles.containerApp}>
        <Header />
        <Search />
        {user.username && <Username />}
        {tweets.length > 0 && tweets[0]?.state && (
          <div ref={targetRef}>
            <ResumeResults />
            <Graph />
          </div>
        )}
        {!loading && tweets.length > 0 && !tweets[0]?.state && (
          <ButtonAnalyse />
        )}
        {!loading && tweets.length > 0 && tweets[0]?.state && (
          <ButtonGraph isIntersecting={isIntersecting} targetRef={targetRef} />
        )}
        {loading && <Spinner />}
        <Alert />
      </div>
    </div>
  );
}
