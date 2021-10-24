import styled from 'styled-components';


export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 70px;
height: 70px;
border-radius: 35px;

background: white;

.container-circle{
    position: relative;
    top: 3px;
}

.container-initials{
    display: flex;
    flex-direction: row;
}

.div-f{
    display: flex;
    background-color: var(--purple-theme);
    font-family: Roboto, sans-serif;
    color: white;
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-right: 2px;
}

.div-p{
    display: flex;
    
    background-color: var(--cyan-theme);

    font-family: Roboto, sans-serif;
    color: white;
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 2px;

}

.div-store{
    //font-family: "Nunito Sans", sans-serif;
    font-family: Orbitron, sans-serif;

    color: black;
    font-size: 0.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 3px;

}

}

`;

