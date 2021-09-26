import { StyledButton } from "./styles";

interface ButtonProps{
    name: string;
}

export function ButtonDefault(props: ButtonProps) {
    return (
        <>
            <StyledButton>
                <div>
                    <input></input>
                    <button type="button">{props.name}</button>
                </div>
            </StyledButton>
        </>
    );
}