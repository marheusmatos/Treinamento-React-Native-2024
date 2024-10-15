import React , {useState}from "react";
import {v4 as uuidv4} from 'uuid';
export const ListaTarefasEdit = () =>{

    const [tarefas, setTarefas] = useState([])

    const addTarefa  = tarefa =>{
      setTarefas([...tarefas, {id:uuidv4(), task: tarefa,completed: false, isEditing:false}])
    }


    return(<div>Edit</div>)
}