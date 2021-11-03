import styled from 'styled-components';


export const Container = styled.div`
    background: var(--purple-theme);
   // background: linear-gradient(90deg, var(--purple-theme) 30%, var(--cyan-theme) 100%);
    display: grid;
    grid-template-columns: auto auto;

    padding: 2rem 3.6rem;

    font-family: Montserrat, sans-serif;
    font-size: 1rem;

    height: 180px;

    .reserved-rights{
        font-size: 0.5rem;
        color: #FFFFFF;
        position: relative;
        top: 25px;
    }
   

`;
export const ContainerFooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    
    color: #FFFFFF;

    div:hover{
        color: var(--cyan-theme);
    }

    div+div{
        margin: 0.3rem 0;
    }
   
`;

export const ContainerFooterSociais = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;

    div:last-child {
        display: flex;
        flex-direction: row;

        a:visited{
            color: #FFFFFF;       
        }
        a:link{
            color: #FFFFFF;    
        }

        i{
            margin: 0.5rem 1rem;
        }
        i:hover{
            color: var(--cyan-theme);
        }
    }
`;

