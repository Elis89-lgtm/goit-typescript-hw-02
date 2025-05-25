import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Can not be empty");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={style.input}
          placeholder="Search images and photos?"
          name="search"
          value={query}
          onChange={handleChange}
          required
          autoFocus
          autoComplete="off"
        />
        <button type="submit" className={style.button}>
          <FiSearch size={16} />
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
