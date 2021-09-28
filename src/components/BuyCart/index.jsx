import { StyledContainerCart, StyledTitleCart, StyledProductLine, StyledProductDescription, StyledQtd, StyledProductInfo, StyledSubtotal, StyledDivisor, StyledCartFooter } from "./styles";
import ProductImage from "../../assets/images/tenisPreto1.jpg";
import { useState } from "react";

// interface DataAPIProps {
//     id: number,
//     product: string,
//     prize: number,
//     img: string,
// }

export function BuyCart() {

    //const [inputValue, setInputValue] = useState < string > ("");

    const fakeAPI = [
        {
            id: 1,
            product: "Tênis de Caminhada Leve Confortável",
            prize: 299.00,
            img: "ProductImage",
        },
        {
            id: 2,
            product: "Tênis Addidas de Run It",
            prize: 499.00,
            img: "ProductImage",
        },
        {
            id: 3,
            product: "Tênis Addidas de Run It",
            prize: 499.00,
            img: "ProductImage",
        },
    ]

    // const cartTotalValue = 0;

    // const lista = fakeAPI.map(
    //     (products) => {
    //         cartTotalValue += products.prize;
    //     });

    const [productQtd, setProductQtd] = useState(1);

    function handlePlusButton() {
        setProductQtd(productQtd+1);
        console.log(productQtd);
    }
    function handleMinusButton() {
        setProductQtd(productQtd-1);
        console.log(productQtd);
    }

    return (
        <>
            {fakeAPI.map((item) => { })}
            <StyledContainerCart>

                <StyledTitleCart>
                    <div>PRODUTO</div>
                    <div>QTD</div>
                    <div>SUBTOTAL</div>
                </StyledTitleCart>

                {fakeAPI.map((item) => {
                    return (<ul key={item.id}>
                        <StyledProductLine>
                            <StyledProductDescription>
                                <div>
                                    <img src={ProductImage} />
                                </div>

                                <StyledProductInfo>
                                    <div>
                                        <h6>{item.product}</h6>
                                    </div>
                                    <div>
                                        <h6>R$ {item.prize}</h6>
                                    </div>
                                </StyledProductInfo>
                            </StyledProductDescription>

                            <StyledQtd>
                                <div><a><i class="fas fa-minus-circle" onClick={handleMinusButton}></i></a></div>
                                <div><input type="number" min="1" value={productQtd}></input></div>
                                <div><i class="fas fa-plus-circle" onClick={handlePlusButton}></i></div>
                            </StyledQtd>

                            <StyledSubtotal>
                                <div>
                                    R$ {item.prize * productQtd}
                                </div>
                                <div><i class="fas fa-trash"></i></div>
                            </StyledSubtotal>

                        </StyledProductLine>

                        <StyledDivisor>
                            <div />
                        </StyledDivisor>

                    </ul>)
                })}

                <StyledCartFooter>
                    <div>
                        <button>FINALIZAR PEDIDO</button>
                    </div>
                    <div>
                        <div>
                            <h5>TOTAL</h5>
                        </div>
                        <div>
                            <h5>R$ 319,80</h5>
                        </div>

                    </div>
                </StyledCartFooter>


            </StyledContainerCart>

        </>
    );
}