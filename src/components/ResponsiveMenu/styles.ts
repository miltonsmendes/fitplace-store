import styled from 'styled-components';



export const StyleNavBar = styled.div`

.NavBarItems{

background: linear-gradient(90deg, #aa1d24 0%, #CC232C 100%);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
}


.navbar-logo{
    color: #FFFFFF;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
}

.fa-dumbbell{
    margin-left: 0.5rem;
    font-size: 1.6rem;
}

.nav-menu{
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
}

.nav-links {
    color: #FFFFFF;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.nav-links:hover {
    background-color: #aa1d24;
    border-radius: 4px;
    transition: all 0.2s ease-out;
}

.fa-bars {
    color: #FFFFFF;
}

.nav-links-mobile{
    display: none;
}

.menu-icon{
    display: none;
}

@media screen and (max-width: 960px){
    .NavbarItems {
        position: relative;
    }

    .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 500px;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    }

    .nav-menu.active {
        background: #aa1d24;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }

    .nav-links{
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    }

    .nav-links:hover{
        background-color: #91141B;
        border-radius: 0;
    }

    .navbar-logo{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0, 5%);
    }

    .menu-icon{
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    .fa-times {
        color: #FFFFFF;
        font-size: 2rem;
    }

    .nav-links-mobile {
        display: block;
        text-align: center;
        padding: 1.5rem;
        margin: 2rem auto;
        border-radius: 4px;
        width: 80%;
        background: #1D2124;
        text-decoration: none;
        color: #FFFFFF;
        font-size: 1.5rem;
    }

    .nav-links-mobile:hover {
        background: #131517;
        color: #B3B4A1;
        transition: 250ms;
    }


}

`;

