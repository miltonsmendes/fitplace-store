import styled from 'styled-components';


export const StyleShowCase = styled.div`
    display: grid;
    //flex:1;
    justify-content: space-around;
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