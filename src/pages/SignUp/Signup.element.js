import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Heading = styled.h1`
    padding-top: 30px;
    font-size: 40px;
`;
export const FormContainer = styled.div`
    padding-top: 30px;
`;
export const FormGroup = styled.div`
    padding: 8px;
    label {
        font-size: 30px;
    }
    input {
        margin-top: 10px;
        padding: 10px;
        width: 35rem;
        border-radius: 5px;
        border: none;
        font-size: 24px;
        &:focus {
            outline: none;
        }
    }
`;
export const SubmitButton = styled.button`
    width: 8rem;
    font-size: 24px;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
    margin-left: 210px;
`;
