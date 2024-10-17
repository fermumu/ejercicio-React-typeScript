import { Tarea } from "./Tarea"


type Props = {
  listaTareas: string[]
  borrarTareas: (index:number) => void 
}

export const ListaTareas = ({listaTareas, borrarTareas}: Props) => {
  return (
    <div className="taskList">
      {listaTareas.map((tarea, index)=>(
        <Tarea key={index} tarea={tarea} borrarTarea={()=>borrarTareas(index)}></Tarea>
      )
      )}
    </div>
  )
}