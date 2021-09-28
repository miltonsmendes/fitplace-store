import { ButtonDefault } from "../ButtonDefault";
import { StyledMenu } from "./styles";

export function HeaderMenu() {
    
    return (
        <>
            <StyledMenu>
                    <div>
                        FitPlace
                    </div>
                    <div>
                        <ButtonDefault name="PROCURAR" inputValue="" />
                    </div>
                    <div>
                        PRODUTOS
                    </div>
                    <div>
                        QUEM SOMOS
                    </div>
                    <div>
                        CONTATO
                    </div>
                    <div>
                        LOGIN
                    </div>
                    <div>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
            </StyledMenu>
        </>
    );
}