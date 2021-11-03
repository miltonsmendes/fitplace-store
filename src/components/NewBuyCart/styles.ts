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
    border-bottom: 1px solid #D1D1D1;
    height: 50px;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.275rem;

    display: flex;
    align-items: baseline;

    color: var(--purple-theme)
  
}

.background-modal{
    background: black;
    opacity: 0.5;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 40vw;
    
}

@media (max-width: 800px){
    width: 50%;
}

div:first-child{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    i:hover{
        cursor: pointer;
    }
}

`;

export const StyleProductLine = styled.div`

/* display: flex;
flex-direction: row; */
display: grid;
grid-template-columns: 1fr 9fr;

font-size: 1rem;

padding: 0.75rem 0;

border-bottom: 1px solid #D9D9D9;

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
`;

export const StyleInputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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





