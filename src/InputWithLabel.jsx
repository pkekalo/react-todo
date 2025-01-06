import React, { useRef, useEffect } from 'react';



const InputWithLabel = ({value, onChange, children}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); 
    });

    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
                type="text"
                id="todoTitle"
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