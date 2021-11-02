import styled from 'styled-components';


export const ContainerComponent = styled.div`

.hidden{
    opacity: 0;
    pointer-events: none;
    transform: translate(-100%, 0);
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

export const StyleShowCase = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: auto auto auto;
    gap: 2rem;

    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const StyleContainerFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.85rem 0;

    
`;


export const StyleFilterButton = styled.div`

    color: var(--black);
    padding: 0.3rem 0.75rem;
    background: #FFFFFF;
    border: 1px solid #D9D9D9; 
    border-radius: 5px; 
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.5;

    display: inline-block;
i{
    margin-right: 1rem;
    font-size: 1rem;
    position: relative;
    top: 1px;
}

`;

export const StyleSortButton = styled.div`

    color: var(--black);
    padding: 0.3rem 0.75rem;
    background: #FFFFFF;
    border: 1px solid #D9D9D9; 
    border-radius: 5px; 
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.5;
              
i{
    margin-left: 1rem;
    position: relative;
    bottom: 2px;
}

`;


export const StyleModalFilterContainer = styled.div`

background: #FFFFFF;
width: 20vw;
height: 100%;
padding: 1.5rem;

z-index: 1;
position: fixed;
left: 0;
bottom: 0;

transition: ease-in;

color: var(--black);
font-family: Montserrat, sans-serif;


.title-modal-row{
    border-bottom: 1px solid #D1D1D1;
    height: 50px;
    margin-bottom: 2rem;
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
    left: 20vw;
    
}



@media (max-width: 800px){
    width: 50%;
}

div:first-child{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
    i{
        display: flex;
        justify-self: flex-end;
        margin-left: 0.5rem;
    }
    i{
        display: flex;
        justify-self: flex-end;
        margin-left: 0.5rem;
    }

    i:hover{
        cursor: pointer;
    }



}

`;



export const StyleFilterItems = styled.div`

display: flex;
align-items: center;
flex-direction: row;
margin: 1rem 0;

input{
    margin-right: 0.3rem;
}

div:last-child{
    font-size: 0.85rem;
}

`;

export const StyleFilterCategory = styled.div`

div:first-child{
    font-size: 1rem;
    font-weight: 600;
}

`;


