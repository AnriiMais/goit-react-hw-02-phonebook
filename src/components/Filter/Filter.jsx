import PropTypes from 'prop-types';
import shortId from 'shortid';

const Filter = ({ value, filterQuery }) => {
  const genIdSearch = shortId.generate();
  return (
    <span className="searchInput">
      <label htmlFor={genIdSearch}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={value}
        id={genIdSearch}
        onChange={filterQuery}
      />
    </span>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterQuery: PropTypes.func.isRequired,
};
export default Filter;
