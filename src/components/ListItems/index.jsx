import { useState, useEffect } from "react";
import { CardShowProduct } from '../CardShowProduct';
import { productList } from '../../data/productList';
import { StyleShowCase } from './styles';

export function ListItems() {

    const [products, setProducts] = useState(productList);

    return (
        <>
            <h1>PRODUTO</h1>
            <div>HOME/ COLEÇÃO / PRODUTO</div>

            <div>
                <div>FILTRO</div>
                <div>ORDENAR</div>
            </div>

            <StyleShowCase>
                {
                    products.map(item => {

                        return (
                            <div key={item.id}>
                                <CardShowProduct item={item} />
                            </div>
                        )
                    })
                }
            </StyleShowCase>

        </>
    );
}