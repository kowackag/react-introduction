import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
    const {name} = props;
    return (
       <i className = {'fab '+ name}/>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
}
export default Icon;