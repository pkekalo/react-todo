import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, value, onChange, children }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); 
    }, []);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                type="text"
                id={id}
                name="title"
                value={value}
                required
                onChange={onChange}
                ref={inputRef} 
            />
        </>
    );
};


export default InputWithLabel;

import PropTypes from 'prop-types';

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,  
    children: PropTypes.node.isRequired,
};
