import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 36px;
    text-indent: 10px;
    border-radius: 5px;
    margin-top: 5px;
    transition: box-shadow 0.1s ease-in;

    &:hover {
        box-shadow: 0px 3px 6px ${(props) => props.theme.shadowColor};
    }

    &:focus {
        box-shadow: 0px 3px 6px ${(props) => props.theme.shadowColor};
    }
`;

const Error = styled.b`
    font-size: 0.8rem;
    color: var(--md-sys-color-error);
    margin: 3px 0px;
`;

const LabelTextBox = ({ className, name, placeholder, type, label, onChange, defaultValue, value, error, ...rest }) => {
    return (
        <Box className={className}>
            <label for={name}>{label}</label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                {...rest}
            />
            {error && <Error>{error[name]}</Error>}
        </Box>
    );
};

export default LabelTextBox;
