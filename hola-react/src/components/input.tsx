import { ChangeEventHandler } from "react";

interface InputProps {
    placeholder: string;  
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

export default function input({placeholder, handleChange}: InputProps) {
    return (
        <input placeholder={placeholder} onChange={handleChange}></input>
    );
}