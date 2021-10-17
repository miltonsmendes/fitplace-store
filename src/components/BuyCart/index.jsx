import { StyledContainerCart, StyledTitleCart, StyledProductLine, StyledProductDescription, StyledQtd, StyledProductInfo, StyledSubtotal, StyledDivisor, StyledCartFooter } from "./styles";
import ProductImage from "../../assets/images/tenisPreto1.jpg";
import { useState, useEffect } from "react";

// interface DataAPIProps {
//     id: number,
//     product: string,
//     prize: number,
//     img: string,
// }

export function BuyCart() {

    const [fakeAPI, setFakeAPI] = useState([
        {
            id: 1,
            product: "Tênis de Caminhada Leve Confortável",
            prize: 299.00,
            img: "ProductImage",
            qnt: 1
        },
        {
            id: 2,
            product: "Tênis Addidas de Run It",
            prize: 499.00,
            img: "ProductImage",
            qnt: 1
        },
        {
            id: 3,
            product: "Tênis Addidas de Run It",
            prize: 499.00,
            img: "ProductImage",
            qnt: 1
        },
    ]);

    const [qntChange, setQntChange] = useState(false);
    
    let cartValue = 0;

    fakeAPI.map(item => {
        cartValue = cartValue + (item.prize * item.qnt);
    })

    function handlePlusButton(id) {
        fakeAPI.map(item => {
            if (item.id === id) {
                item.qnt++;
                setQntChange(!qntChange)
            }
        })
    }

    function handleMinusButton(id) {
        fakeAPI.map(item => {
            if (item.id === id && item.qnt > 1) {
                item.qnt--;
                setQntChange(!qntChange)
            }
        })
    }

    function handleDelete(id) {
        setFakeAPI(prev => prev.filter(item => item.id !== id))
    }

    useEffect(() => {
        
    }, [qntChange])

    return (
        <>
            <StyledContainerCart>

                <StyledTitleCart>
                    <div>PRODUTO</div>
                    <div>QTD</div>
                    <div>SUBTOTAL</div>
                </StyledTitleCart>

                {fakeAPI.map((item) => {
                    return (
                        <ul key={item.id}>
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
                                    <div><i class="fas fa-minus-circle" disabled={item.qnt <= 1 ? true : false} onClick={() => handleMinusButton(item.id)}></i></div>
                                    <div><input type="number" min="1" value={item.qnt}></input></div>
                                    <div><i class="fas fa-plus-circle" onClick={() => handlePlusButton(item.id)}></i></div>
                                </StyledQtd>

                                <StyledSubtotal>
                                    <div>
                                        {(item.prize * item.qnt).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </div>
                                    <div><i class="fas fa-trash" onClick={() => handleDelete(item.id)}></i></div>
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
                            <h5>{cartValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                        </div>

                    </div>
                </StyledCartFooter>

            </StyledContainerCart>

        </>
    );
}