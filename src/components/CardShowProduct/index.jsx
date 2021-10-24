import MunhequeiraImage from "../../assets/images/munhe1.jpg";
import { StyledContainerCard, StyledTitleAndPrize, StyleRankAndOffer, StyleAddCart } from './styles';


export function CardShowProduct(data) {
    
    return (
        <StyledContainerCard>

            <img src={data.item.imageURL}></img>
            <StyledTitleAndPrize>
                <p>{data.item.productName}</p>
                <div className={data.item.onSale === 'no' ? 'no-visible' : 'visible' } disabled={data.item.onSale === 'no' ? true : false } >{(data.item.prize).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
                <p>{(data.item.prize - (data.item.prize/100)*data.item.descont).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            </StyledTitleAndPrize>

            <StyleRankAndOffer>
                <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    [{data.item.quantityRated}]
                </div>
                <div className="offer" className={data.item.onSale === 'yes' ? 'offer on-sale' : 'offer no-sale'}>Economize {data.item.descont}%</div>
            </StyleRankAndOffer>

            <StyleAddCart>
                <button><i class="fas fa-shopping-cart"></i>Adicionar ao carrinho</button>
            </StyleAddCart>

        </StyledContainerCard>
    );
}