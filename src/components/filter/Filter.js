import PropTypes from 'prop-types';

import filter from './Filter.module.css';

const Filter = ({ onFilter }) => {
	return (
		<>
			<div className={filter.title}>Find contacts by name</div>
			<input onChange={e => onFilter(e)} type="text" name="filter" />
		</>
	);
};

export default Filter;

Filter.propTypes = {
	onFilter: PropTypes.func.isRequired,
};
