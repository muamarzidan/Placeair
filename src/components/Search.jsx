import PropTypes from 'prop-types';

const Search = ({ className, type, id, placeholder, value, onChange }) => {
    return (
        <>
            <input
                className={className}
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
}

Search.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Search;