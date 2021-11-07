import PropTypes from 'prop-types';
import shortId from 'shortid';
import s from './Filter.module.scss';

const Filter = ({ value, filterQuery }) => {
  const genIdSearch = shortId.generate();
  return (
    <span className={s.searchInputWrap}>
      <label className={s.filterLabel} htmlFor={genIdSearch}>
        Find contacts by name
      </label>
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
