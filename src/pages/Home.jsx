import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Input from "../components/Input";
import Task from "../components/Task";
import TaskContainer from "../components/TaskContainer";

const Home = () => {
  const [inputValue, setInputValue] = useState("Example Task");

  const [tasks,setTasks] = useState([]);


  useEffect(()=>{

    setTasks([
      ...tasks,inputValue
    ]);
    
  },[inputValue])
  console.log(tasks);


  return (
    <div className="home bg-dark">
      <Container className="p-1">
        <Header />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <TaskContainer>
          {
            tasks?.map((task,i)=> {
              return <Task key={i} taskName={task}/>
            })
          }
          
        </TaskContainer>
      </Container>
    </div>
  );
};

export default Home;
