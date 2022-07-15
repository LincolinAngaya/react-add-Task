import Task from "./Task";
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
    {tasks.map((task) => (
      <Task key={task.id} 
      tasks={task}
      onToggle={onToggle}
       onDelete={onDelete}/>))
      }
    </>
  )
}

export default Tasks;