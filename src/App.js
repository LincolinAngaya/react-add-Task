import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

//import React from "react";---used when using class;
function App() {
  const  [showAddTask, setShowAddTask] = useState(false)
  const  [tasks, setTasks] = useState(
    [
      {
      id:1,
      text:'Doctor Appoitnment',
      day:'Feb 5th at 2:30pm',
      reminder:true,
      },
      {
        id:2,
        text:'Meeting At School',
        day:'Feb 6th at 1:30pm',
        reminder:true,
        },
        {
          id:3,
          text:'Food Shopping',
          day:'Feb 5th at 2:30pm',
          reminder:false,
          }
    ]
  )
// delete task
const deleteTask= (id) =>{
setTasks(tasks.filter((tasks)=> tasks.id !==id))
}
//toggleReminder
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder:
      !tasks.reminder}: task
      )
      )
}
//addtask
const addTask =(task) =>{
  const id = Math.floor(Math.random()* 10000)+1
  console.log()
   const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
         {showAddTask && <AddTask  onAdd={addTask}/>}
        <Header title='Task Tracker'onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        :
          'no tasks to show'
        }
    
      
    </div>

  );

}
//class
// class App extends React.Component{
//   render(){
//    return <h1>hello kenya</h1>
//   }
// }

export default App;
