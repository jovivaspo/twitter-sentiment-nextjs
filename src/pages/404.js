import Link from "next/link";
import styles from "@/styles/404.module.css";
const host = process.env.NEXT_PUBLIC_HOST;
export default function Custom404() {
  return (
    <div className={styles.containerNotFound}>
      <h1 className={styles.titleNotFound}>404 - Página no encontrada</h1>
      <p className={styles.textNotFound}>
        Vuelva a la página de <Link href={host}>Inicio</Link>
      </p>
    </div>
  );
}
