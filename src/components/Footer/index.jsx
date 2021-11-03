import { Container, ContainerFooterMenu, ContainerFooterSociais } from './styles';

export function Footer() {


    return (
        <Container>
            <ContainerFooterMenu>
                <div>Produtos</div>
                <div>Quem somos</div>
                <div>Produtos</div>
            </ContainerFooterMenu>

            <ContainerFooterSociais>
                <div>Nossos Sociais</div>
                <div>
                    <div><a href="https://www.instagram.com/fitplace.store/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a></div>
                    <div><a href="https://www.instagram.com/fitplace.store/" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a></div>
                </div>
            </ContainerFooterSociais>
            <div className="reserved-rights">© 2021 FitPlace Store todos os direitos reservados.<br></br>
            Milton Mendes Frontend Developer.
            </div>
        </Container>
    )

}