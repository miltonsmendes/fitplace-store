import { useState, useEffect } from "react";
import { CardShowProduct } from '../CardShowProduct';
import { productList } from '../../data/productList';
import { categoriesList } from '../../data/categoriesList';
import { Container, StyleShowCase, StyleFilterButton, StyleSortButton, StyleContainerFilter, StyleModalFilterContainer, StyleFilterItems, ContainerComponent, StyleFilterCategory } from './styles';

export function ListItems() {

    const [categories, setCategories] = useState(categoriesList);
    const [closeModal, setCloseModal] = useState(false);

    var usingFilter = false;
    var countFalseFilters = 0;


    //****************FILTER PR TEXTFIELD INPUT*****************/
    // var filter = "Whey";

    // const filteredProducts = productList.filter((product) => {
    //     if (filter === "") {
    //         return product;
    //     } else if (product.productName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
    //         return product;
    //     }
    // })

    //************************************************************************************************************************//

    function handleOpenFilter() {
        setCloseModal(!closeModal);
    }

    function handleCheckFilter() {

        var filteredProducts = [];

        filteredProducts = productList.filter((product) => {
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].checked && product.categoryID === categories[i].categoryID) {
                    return product
                }
            }
        })

        return filteredProducts;
    }

    categories.map(dpt => {
        if (dpt.checked != false) {
            countFalseFilters++;
        } else {
            return
        }
    })

    if (countFalseFilters > 0) {
        usingFilter = false
    } else {
        usingFilter = true
    }


    return (
        <ContainerComponent>
            <StyleModalFilterContainer className={closeModal ? "visible" : "hidden"}>
                <div className="title-modal-row" onClick={handleOpenFilter}>
                    <div>FILTRO</div>
                    <div><i className='fas fa-times'></i></div>
                </div>

                <div className="background-modal" />


                <StyleFilterCategory >
                    <div>Categorias</div>
                    {
                        categoriesList.map((category) => {
                            return (
                                <StyleFilterItems key={category.categoryID}>
                                    <div>
                                        <input type="checkbox" checked={categories.checked} onChange={event => {
                                            //let checked = event.target.checked;
                                            setCategories(
                                                categories.map(data => {
                                                    if (category.categoryID === data.categoryID) {
                                                        data.checked = !data.checked;
                                                    }
                                                    return data;
                                                })
                                            )
                                            handleCheckFilter();
                                        }}>

                                        </input>
                                    </div>
                                    <div>{category.categoryIDName}</div>
                                </StyleFilterItems>
                            )
                        })
                    }
                </StyleFilterCategory>
            </StyleModalFilterContainer>



            <Container>

                <h1>PRODUTOS</h1>
                <span>HOME / COLEÇÃO / PRODUTO</span>

                <StyleContainerFilter>
                    <StyleFilterButton onClick={handleOpenFilter}>
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
                        usingFilter
                            ? productList.map(item => {

                                return (
                                    <div key={item.id}>
                                        <CardShowProduct item={item} />
                                    </div>
                                )
                            })

                            : handleCheckFilter().map(item => {

                                return (
                                    <div key={item.id}>
                                        <CardShowProduct item={item} />
                                    </div>
                                )
                            })
                    }
                </StyleShowCase>
            </Container>

        </ContainerComponent>
    )
}