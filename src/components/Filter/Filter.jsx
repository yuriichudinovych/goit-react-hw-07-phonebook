import PropTypes from 'prop-types';

import { StyledFilter } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filter-slise';
import { useSelector, useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <StyledFilter htmlFor="">
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </StyledFilter>
    </>
  );
};

Filter.propsTypes = {
  filter: PropTypes.string,
};

export default Filter;
