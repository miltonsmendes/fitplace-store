import { Container } from "./styles";

export function Logo() {


    return (
        <Container>
            <div  className="container-circle">
                <div className="container-initials">
                    <h1 className="div-f">F</h1>
                    <h1 className="div-p">P</h1>
                </div>

                <div className="div-store">
                    <h1>STORE</h1>
                </div>
            </div>
        </ Container>
    );
}