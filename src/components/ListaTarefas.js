import React, { useState } from "react";  // Adicionei o import do useState

export const ListaTarefas = () => {
  const [value, setValue] = useState("");  // Corrigi a capitalização de 'setValue'

  const submit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className="ListaForm" onSubmit={submit}>
      <label htmlFor="tarefa">Tarefa</label>
      <input
        type="text"
        id="tarefa"
        className="inputTarefa"
        onChange={(e) => setValue(e.target.value)}  // Corrigi a capitalização de 'setValue'
        value={value}  // Adicionei o value para ligar o input ao state
      />

      <label htmlFor="duracao">Duração</label>
      <input type="text" id="duracao" className="inputDuracao" />

      <button type="submit">Adicionar</button>
    </form>
  );
};
