import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Enter name for search"
        className={s.input}
      />
    </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

