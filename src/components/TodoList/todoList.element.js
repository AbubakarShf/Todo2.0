import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding-top: 10px;
    width: 100vw;
    .pre-btn-container {
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            width: 2rem;
            height: 2rem;
            border-radius: 5px;
            color: white;
            background-color: #1111c4;
            font-size: 25px;

            &:hover {
                background-color: #0000ff;
            }
        }
    }

    .pre-btn-container,
    .post-btn-container {
        display: flex;
        justify-content: space-around;
    }
    .post-btn-container {
        width: 12rem;
        button {
            width: 5rem;
            font-size: 20px;
            height: 2.4rem;
            border-radius: 10px;
        }

        .btn-edit {
            background-color: #00c030;
            color: #fff;
        }
        .btn-delete {
            background-color: red;
            color: white;
        }
    }
`;
export const Button = styled.button`
    font-weight: 600;
    cursor: pointer;
    border: none;
`;
export const Badge = styled.span`
    background-color: ${(props) => props.color};
    padding: 5px;
    border-radius: 7px;
    height: 2rem;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: white;
`;
export const InputBox = styled.input`
    margin-left: 7px;
    margin-right: 7px;
    padding: 8px;
    width: 28rem;
    border-radius: 5px;
    border: none;
    font-size: 24px;
    font-weight: 600;
    border-radius: 6px;
    border: 1px solid #35bd13;
    &:focus {
        outline: none;
    }
    ::selection {
        background-color: #35bd13;
        color: #fff;
    }
`;
