import React from 'react';

const InputWithLabel = ({value, onChange}) => {
    return (
        <>
            <label htmlFor="todoTitle">Title </label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={value}
                required
                onChange={onChange}
            />
        </>
    );
};

export default InputWithLabel;