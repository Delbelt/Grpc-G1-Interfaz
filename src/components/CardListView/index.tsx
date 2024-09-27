import styles from "./CardListView.module.css";

interface CardListViewProps {
  title: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CardListView = ({ title, children, onClick }: CardListViewProps) => {
  return (
    <div className={styles.listContent}>
      <h2>{title}</h2>
      <div className={styles.listActions}>
        <button onClick={onClick} className={`${styles.listActionsButton} ${styles.update}`}>
          Modificar
        </button>
        <button className={`${styles.listActionsButton} ${styles.delete}`}>Eliminar</button>
      </div>
      <span className={styles.listLineBreak}></span>
      {children}
    </div>
  );
};

export default CardListView;
