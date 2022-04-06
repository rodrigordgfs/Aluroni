import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface IProp {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: IProp) {
  return (
    <div className={styles.buscador}>
      <input
        placeholder="Buscar"
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
