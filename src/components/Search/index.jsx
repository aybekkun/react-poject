import debounce from "lodash.debounce";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseImg from "../../assets/img/close.svg";
import SearchImg from "../../assets/img/search.svg";
import { selectFilter, setSearchValue } from "../../redux/slices/filterSlice";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectFilter);

  const [value, setValue] = React.useState("");

  const inputRef = useRef(null);

  const onClickClear = () => {
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log("hello");
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск пицццы"
      />
      {!searchValue ? (
        <img className={styles.icon} src={SearchImg} alt="Search" />
      ) : (
        <img
          onClick={onClickClear}
          className={styles.icon}
          src={CloseImg}
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
