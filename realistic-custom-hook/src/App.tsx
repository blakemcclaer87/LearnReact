import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import ITask from './types/ITask';
import useHttp
 from './custom-hooks/use-http';
import IRequestConfig from './types/IRequestConfig';
function App() {

  const taskLoadHandler = useCallback((newItems: ITask[]) => {
    setTasks(newItems);
  }, []);

  const taskAddHandler = (task: ITask) => {
    setTasks((prevTasks: any) => prevTasks.concat(task));
  };

  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchItemsHook = useHttp(taskLoadHandler)

  const {isLoading, error, sendRequest: fetchTasks} = fetchItemsHook;

  useEffect(() => {
    fetchTasks({
      url: 'https://react-http-2092a-default-rtdb.firebaseio.com/tasks.json',
      method: 'GET',
      body: null
    } as IRequestConfig);
  }, [fetchTasks]);

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
