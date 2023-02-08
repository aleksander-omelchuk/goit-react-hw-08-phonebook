import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilter);

  const onChange = query => {
    dispatch(setQuery(query));
  };

  const handleChange = evt => onChange(evt.target.value);

  return (
    <label className={css.filter__lable}>
      <p className={css.filter__description}>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter the search name"
      />
    </label>
  );
};

export default Filter;
