import style from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <p className={style.error}>{message || "Something went wrong!"}</p>
);

export default ErrorMessage;
