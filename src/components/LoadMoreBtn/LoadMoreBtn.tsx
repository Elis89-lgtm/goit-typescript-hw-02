import { ReactNode, MouseEventHandler } from "react";
import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  children: ReactNode;
  onClick: MouseEventHandler;
  disabled: boolean;
}

const LoadMoreBtn = ({ children, onClick, disabled }: LoadMoreBtnProps) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
