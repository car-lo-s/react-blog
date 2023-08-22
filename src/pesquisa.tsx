import React, { useState } from "react";
import "./App.css";
import Lupa from "./assets/search.svg";

export const Pesquisa = ({mensagem}:any) => {
  const [pesquisa, setPesquisa] = useState<string>("");
  const handleSearch = (event: any) => {
    setPesquisa(event.target.value);
  };
  const handleClick = () => {
    mensagem(pesquisa)
    // alert(pesquisa);
  };

  const handleKeyPress = (event:any) => {
    if (event.key === "Enter") {
      // O código aqui será executado quando a tecla "Enter" for pressionada
      handleClick()
    }
  };
  return (
    <header>
      <div className="tamanho">
        <h2>CodeBit</h2>
        
      </div>
      <div className="tamanho">
        <img src={Lupa} alt="" onClick={handleClick} />
        <input
          type="text"
          name=""
          id=""
          value={pesquisa}
          onChange={handleSearch}
          onKeyDown={handleKeyPress}
          placeholder="Buscar noticia."
        />
      </div>
    </header>
  );
};
