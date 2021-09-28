import { useState } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
    name: string;
    inputValue: string;
}

interface InputTextProps {
    inputValue: string;
}

export function ButtonDefault({ name }: ButtonProps, { inputValue }: InputTextProps) {

    const [inputText, setInputText] = useState<string>("");
    
    function handleInputValue() {
        inputValue = inputText;
    }
     
    return (
        <>
            <StyledButton>
                <div>
                    <input type="text" onChange={(e) => { setInputText(e.target.value) }} value={inputText} />
                    <button type="button" onClick={handleInputValue}>{name}</button>
                </div>
            </StyledButton>
        </>
    );
}