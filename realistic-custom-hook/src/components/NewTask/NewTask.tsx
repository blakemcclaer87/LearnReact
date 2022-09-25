import React, { useState } from "react";
import useHttp from "../../custom-hooks/use-http";
import IRequestConfig from "../../types/IRequestConfig";
import ITask from "../../types/ITask";
import Section from "../UI/Section/Section";
import TaskForm from "./TaskForm";

const NewTask = (props: any) => {

    const taskSubmittedHandler = (newTasks: ITask[]) => {
      console.log('New task submit handler');
      console.log(newTasks);
      props.onAddTask(newTasks[0]);
    }
    const submitTaskHook = useHttp(taskSubmittedHandler)

    const {isLoading, error, sendRequest: submitNewTask} = submitTaskHook;
  
    const enterTaskHandler = async (taskText:string) => {
      submitNewTask({
        url: 'https://react-http-2092a-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: {text: taskText}
      } as IRequestConfig);
    };
  
    return (
      <Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
        {error && <p>{error}</p>}
      </Section>
    );
};

export default NewTask;
