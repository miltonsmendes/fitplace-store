import styled from 'styled-components';


export const StyledContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;

    border-radius: 4px;
    padding: 2rem;
    margin: 2rem;
`;

export const StyledTitleCart = styled.div`
    justify-content: space-between;
    flex-direction: row;

    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;

    color: #99999C;
    font-weight: 600;

    div{
        display: flex;
        justify-content: center;
    }
    div:last-child{
        justify-content: start;
    }

`;

export const StyledProductLine = styled.div`
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    justify-content: space-around;

    margin-top: 1rem;

    font-weight: 600;
`;

export const StyledProductDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 600;

    img{
        width: auto;
        height: 100px;
    }
`;

export const StyledProductInfo = styled.div`
    flex-direction: column;
    margin-left: 1rem;
`;

export const StyledQtd = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
    width: 50px;
    text-align: center;
    color: #99999C;
    font-weight: 600;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

    i{
        margin: 0 0.5rem;
        color: #CC232C;
        transition: 0.2s;
    }
    i:hover{
        color: #88181e;
        cursor: pointer;
    }
    
`;

export const StyledSubtotal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    height: 100%;

    font-weight: 600;

    div:first-child {
        margin-right: auto;
        //margin-left: auto;

    }

    div:last-child {
        margin-right: auto;
        margin-left: auto;
    }

    i{
        color: #CC232C;
        transition: 0.2s;
    }
    i:hover{
        color: #88181e;
        cursor: pointer;
    }

`;

export const StyledDivisor = styled.div`
    margin: 1rem 0;
    border: 1px solid #EEEEEE;

`;

export const StyledCartFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 2rem;

button {
    background: #343A40;
    border: 1px solid #343A40;
    border-radius: 4px;
    color: white;
    padding: 0.75rem;
    line-height: 1.5;
    transition: 0.25s;

    font-weight: 600;
}

    button:hover {
        background: #1D2124;
    }

    div:last-child {
        display: flex;
        flex-direction: row;
        align-items: end;

        div:first-child {
        color: #99999C;

        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.5;
        }

        div:last-child {
        
        font-size: 2.5rem;
        font-weight: 600;
        margin-left: 0.5rem;
        }
    }
`;

