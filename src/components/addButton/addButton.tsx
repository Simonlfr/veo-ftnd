import styled from "styled-components";

interface AddButtonProps {
    primary?: boolean;
}

export const AddButton = styled.button<AddButtonProps>`
    background-color: ${(props) => (props.primary ? "#007BFF" : "#FFF")};
    color: ${(props) => (props.primary ? "#FFF" : "#007BFF")};
    font-size: 16px;
    padding: 10px 20px;
    border: 2px solid #007bff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${(props) => (props.primary ? "#0056b3" : "#e0e0e0")};
        color: ${(props) => (props.primary ? "red" : "#007BFF")};
    }
`;
