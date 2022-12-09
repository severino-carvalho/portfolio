import styles from "./ContaineGrid.module.css";

export default function ContainerGrid(props) {
  return (
    <div className={styles.containerGrid + ` ${styles[props.styles]}`}>
      {props.children}
    </div>
  );
}
