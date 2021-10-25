import { useState, useEffect } from "react";
import { CardShowProduct } from '../CardShowProduct';
import { productList } from '../../data/productList';
import { Container, StyleShowCase, StyleFilterButton, StyleSortButton, StyleContainerFilter } from './styles';

export function ListItems() {

    const [products, setProducts] = useState(productList);

    return (
        <Container>
            <h1>PRODUTOS</h1>
            <span>HOME / COLEÇÃO / PRODUTO</span>

            
            <StyleContainerFilter>
                <StyleFilterButton>
                    <i class="fas fa-sliders-h"></i>
                    FILTRO
                </StyleFilterButton>

                <StyleSortButton>
                    ORDENAR
                    <i class="fas fa-sort-down"></i>
                </StyleSortButton>
            </StyleContainerFilter>

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
        </Container>
    );
}