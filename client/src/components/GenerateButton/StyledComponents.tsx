import styled from 'astroturf/react';



export const ButtonContainer = styled("div")`
    border: 0px 0px;   
    padding: 0px 0px;
    margin: 0px 0px; 
    background-color: skyblue;
    transition: ease background-color 250ms;
    &:hover {
        background-color: lightblue
    }
    color: white;
    & > button {
        border: 1px black;  
        background-color: skyblue;
        transition: ease background-color 250ms;
        &:hover {
            background-color: lightblue
        }
        color: black;
        font-size: 20px;
        padding: 10px 30px;
        margin: 10px 0px;
        cursor: pointer;
    }
`;
