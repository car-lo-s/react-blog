import { useState } from "react";
import { noticias } from "./dado";

export const Resultado = (props: any) => {
  let listaVerificada: any = [];
  if (props.texto) {
    noticias.map((item) => {
      if (item.descricao.indexOf(props.texto) !== -1) {
        listaVerificada.push(item);
      }
    });
    console.log(listaVerificada);
  }
  return (
    <div className="resultado">
      {props.texto
        ? listaVerificada.map((item: any) => (
            <div key={item.id} className="tamanho resultadoPesquisa">
              <p>Publicação: {item.data}</p>
              <h3> {item.titulo}</h3>
              <p> {item.descricao} </p>
              <p> {item.autor} </p>
            </div>
          ))
        : noticias.map((item: any) => (
            <div key={item.id} className="tamanho resultadoPesquisa">
              <p>Publicação: {item.data}</p>
              <h3> {item.titulo}</h3>
              <p> {item.descricao} </p>
              <p> {item.autor} </p>
            </div>
          ))}
    </div>
  );
};
