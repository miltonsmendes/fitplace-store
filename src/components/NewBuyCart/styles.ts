import styled from 'styled-components';


export const ContainerComponent = styled.div`

.hidden{
    opacity: 0;
    pointer-events: none;
    transform: translate(100%, 0);
    transition: all 0.5s ease;

}

.visible{
    transition: all 0.5s ease;
    transform: translate(0, 0);
}

`;

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    margin: 0.5rem 1rem;
   // margin: 0.5rem 0;
    max-width: 1600px;
    justify-content: center;

    @media screen and (max-width: 930px){
        display: grid;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 580px){
        display: grid;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 4rem;
        max-width: 580px;
        
    }

    h1{
        font-size: 1.5rem;
        margin: 2.25rem 0 1.5rem 0;
    }

    span{
        font-size: 0.75rem;
        margin: 0 0 1.5rem 0;
        font-weight: 700;
        color: #363638;
    }
`;

export const StyleModalCartContainer = styled.div`

background: #FFFFFF;
width: 40vw;
height: 100%;
padding: 1.5rem;

z-index: 1;
position: fixed;
right: 0;
bottom: 0;

transition: ease-in;

color: var(--black);
font-family: Montserrat, sans-serif;


.title-modal-row{
    border-bottom: 1px solid #D9D9D9;
    height: 50px;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.275rem;

    display: flex;
    align-items: baseline;

    color: var(--purple-theme);


    flex-direction: row;
    justify-content: space-between;
    
    i:hover{
        cursor: pointer;
    }
  
}

.background-modal{
    background: black;
    opacity: 0.5;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 40vw;

    @media (max-width: 800px){
    width: 60vw;
    right: 50vw;
    
    }
    @media (max-width: 600px){
    width: 20vw;
    right: 80vw;
}
    
}

@media (max-width: 800px){
    width: 50vw;
}

@media (max-width: 600px){
    width: 80vw;
}


`;

export const StyleProductLine = styled.div`

/* display: flex;
flex-direction: row; */
display: grid;
grid-template-columns: 1fr 9fr;


font-size: 1rem;

padding: 0.75rem 0;


img{
    width: 80px;
    height: auto;
    
}

`;

export const StyleProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding: 0 0 0.5rem 0.5rem;
    

    border-bottom: 1px solid #D9D9D9;

`;

export const StyleInputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .partial-prize-amount{
        display: flex;
        align-items: flex-end;
        position: relative;
        bottom: -3px;
    }
`;

export const StyledQtd = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;



    input {
    width: 35px;
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
        color: var(--purple-theme);

        transition: 0.2s;
    }
   
    i:hover{
        color: var(--purple-hover);
        cursor: pointer;
    }

    .fa-minus-circle{
        margin-left: 0;
    }
    
`;




export const StyledCartFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 2rem;
    padding-top: 1rem;

    border-top: 1px solid #D9D9D9;


    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;

        .finish-button{
            margin-top: 1rem;
            order: 2;
            button{
                width: 200px;
            }
        }

        
    }

button {
    //background: #343A40;
    background: var(--purple-theme);
    //border: 1px solid #343A40;
    border: 1px solid var(--purple-theme);
    border-radius: 4px;
    color: white;
    padding: 0.5rem;
    line-height: 1.5;
    transition: 0.25s;

    font-weight: 600;
}

    button:hover {
        //background: #1D2124;
        background: var(--purple-theme);
    }

    div:last-child {
        display: flex;
        flex-direction: row;
        align-items: end;

        div:first-child {
        color: #99999C;

        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5;
        }

        div:last-child {
        
        font-size: 2rem;
        font-weight: 600;
        margin-left: 0.5rem;
        }
    }
`;




