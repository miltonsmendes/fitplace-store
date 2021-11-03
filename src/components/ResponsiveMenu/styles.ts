import styled from 'styled-components';
//import GlobalStyle from '.';


export const StyleNavBar = styled.div`

font-family: Montserrat, sans-serif;

.NavBarItems{

    
//background: linear-gradient(90deg, #aa1d24 0%, #CC232C 100%);

background: linear-gradient(90deg, var(--purple-theme) 30%, var(--cyan-theme) 100%);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;

.logo-container{
    order: 1;
}


.cart-icon-container{
    order: 4;
    color: #fff;
    display: flex;
 

    .amount-cart{
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: #FFFFFF;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--purple-hover);

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        top: -10px;
        right: 5px;
    }
}

.cart-icon-container:hover{
    color: var(--purple-hover);
    transition: all 0.3s ease-out;
    cursor: pointer;
}

.menu-icon{
    order: 3;
}

.links-container{
    order: 2;
}



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
    //color: #FFFFFF;
    //color: #EEEEEE;
    color: #F1F1F1;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.nav-links:hover {
    //background-color: #aa1d24;
    background-color: var(--purple-theme);
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

        order: 1;
    }

    .nav-menu.active {
        //background: #aa1d24;
        background: var(--purple-theme);
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;

        order: 2;
    }

    .nav-links{
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    }

    .nav-links:hover{
        //background-color: #91141B;
        background-color: var(--purple-theme);
        color: #F1F1F1;
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
        transform: translate(-100%, 67%);
        
        font-size: 28px;
        cursor: pointer;
    }

    .cart-icon-container{
        color: #FFFFFF;
        
        position: absolute;
        right: 7rem;
        
    }

    .fa-times {
        color: #FFFFFF;
        font-size: 28px;
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

