import { ReactNode } from "react";
import css from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
}
const Grid = ({ children }: GridProps) => {
  return <ul className={css.list}>{children}</ul>;
};

export default Grid;
