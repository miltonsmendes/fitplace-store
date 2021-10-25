import styled from 'styled-components';


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