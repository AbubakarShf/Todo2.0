import styled from "styled-components";
export const Container = styled.div`
    /* min-height: 89.3vh; */
    width: 100wh;
    /* margin-bottom: -40px; */
    /* display: flex; */
    justify-content: center;
    align-items: center;
`;

export const TodoForm = styled.div`
    /* margin-top: -250px; */

    /* width: 670px; */
    /* display: flex; */
    justify-content: center;
    border-radius: 20px;
    /* transition: box-shadow 0.3s; */

    /* :hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    } */
`;
export const TodoHeader = styled.div`
    /* padding-top: 10px; */
    input {
        margin-top: 10px;
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
            border: 1px solid #ffd001;
        }
        ::selection {
            background-color: #35bd13;
            color: #fff;
        }
    }
    button {
        font-weight: 600;

        border-radius: 8px;
        background: #35bd13;
        padding: 10px 22px;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        margin-left: 10px;
        font-size: 20px;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #ffd001;
            color: #fff;
            border: 1px solid #ffd001;
            border-radius: 8px;
        }
    }
`;
export const ListHere = styled.div``;
