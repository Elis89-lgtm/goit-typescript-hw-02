import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.backdrop}>
      <ClipLoader
        color="#4fa94d"
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Loader;
