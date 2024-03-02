import { ChangeEventHandler, MouseEventHandler } from "react";
import Button from "../components/button";
import Input from "../components/input";

export default function usersForm() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    alert(e.target.value);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    alert("Hola Mundo");
  };

  return (
    <>
      <Input placeholder="Nombre" handleChange={handleChange} />
      <Input placeholder="Apellido" handleChange={handleChange} />
      <Button handleClick={handleClick}>Hola Mundo</Button> 
    </>
  );
}
