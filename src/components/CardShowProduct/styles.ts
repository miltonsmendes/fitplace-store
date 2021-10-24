import styled from 'styled-components';


export const StyledContainerCard = styled.div`
    display: flex;
    justify-content: center;
    
    background-color: #FFFFFF;
    flex-direction: column;
    border-radius: 5px 5px 0 0;

    width: 18.75rem;
    height: auto;

    font-family: 'Montserrat', sans-serif;

    img{
        width: 100%;
        height: auto;
        display: flex;
        justify-self: flex-start;
        
        border-radius: 10px 10px 0 0;
    }

.no-visible{
    color: white;
    cursor: default;
    user-select: none;
    margin: 5px 0;
}

`;

export const StyledTitleAndPrize = styled.div`
font-size: 1.5rem;
margin: 0.5rem 0;
margin-left: 0.5rem;

font-size: 1rem;
font-weight: 600; 
div{
    display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    text-decoration: line-through;
    color: #696969;
}

p:first-child{
    margin: 0.5rem 0;
}

`;

export const StyleRankAndOffer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 0.7rem;
margin-left: 0.5rem;

i{
    //width: 5px;
    height: auto;
    margin: 0 0.2rem 0 0;
    color: #FFCC00;
}

.offer{
    justify-content: center;
    align-items: center;
    padding: 0.2rem;

    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1;

    background: #3DE548;
    transform: skew(-20deg);
    margin-right: 0.625rem; 
}

.on-sale{
    display: visible;
}

.no-sale{
    display: none;
}


`;

export const StyleAddCart = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;

margin: 0;

button{
	background: var(--purple-theme);
    color: #FFFFFF;
    border: none;
	border-radius: 0 0 5px 5px;
	padding: 0;
	cursor: pointer;
    font-weight: 600;

    margin: 1rem 0 0 0;

    width: 100%;
    padding: 0.8rem;

}

i{
margin-right: 0.4rem;
}

button:hover{
	background: var(--purple-hover);
}

`;