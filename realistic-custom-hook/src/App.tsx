import React, { useEffect, useState } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import ITask from './types/ITask';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async (taskText: string = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-2092a-default-rtdb.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task: ITask) => {
    setTasks((prevTasks: any) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
