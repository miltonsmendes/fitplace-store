import { ContainerComponent, StyleModalCartContainer, StyleProductLine, StyleProductInfo, StyledQtd, StyleInputRow } from "./styles";
import ProductImage from "../../assets/images/tenisPreto1.jpg";
import { useState, useEffect } from "react";

// interface DataAPIProps {
//     id: number,
//     product: string,
//     prize: number,
//     img: string,
// }

export function NewBuyCart(props) {

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
    const [closeCartModal, setCartCloseModal] = useState(props.isOpen);

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

    function handleOpenFilter() {
        setCartCloseModal(!closeCartModal);
    }


    return (
        <ContainerComponent>

            <StyleModalCartContainer className={closeCartModal ? "visible" : "hidden"}>
                <div className="title-modal-row" onClick={handleOpenFilter}>
                    <div>CARRINHO</div>
                    <div><i className='fas fa-times'></i></div>
                </div>

                <div className="background-modal" />


                {
                    fakeAPI.map(item => {
                        return (
                            <StyleProductLine>
                                <div>
                                    <img src={ProductImage} />
                                </div>

                                <StyleProductInfo>

                                    <div>Tênis de Caminhada Leve Confortável</div>

                                    <StyleInputRow>
                                        <StyledQtd>
                                            <div><i class="fas fa-minus-circle" disabled={item.qnt <= 1 ? true : false} onClick={() => handleMinusButton(item.id)}></i></div>
                                            <div><input type="number" min="1" value={item.qnt}></input></div>
                                            <div><i class="fas fa-plus-circle" onClick={() => handlePlusButton(item.id)}></i></div>
                                        </StyledQtd>
                                        <div>
                                        {(item.prize * item.qnt).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                        </div>
                                    </StyleInputRow>

                                </StyleProductInfo>
                            </StyleProductLine>
                        )
                    })
                }







            </StyleModalCartContainer>

        </ContainerComponent>
    );
}