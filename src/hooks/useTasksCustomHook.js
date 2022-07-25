import { useEffect, useState } from 'react'
import axios from 'axios';
const BASE_API = `https://cobuildlab-tasks-back.herokuapp.com/api`;
const useTasksCustomHook = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      const response = await axios(`${BASE_API}/tasks/all`)
      setTasks(response.data.data);
      setLoading(false)
    }

    fetchTasks()
  }, [])
  
  const add = async (body) => {
    setLoading(true)
    const response = await axios.post(`${BASE_API}/tasks/store`,body)
    setTasks([...tasks,response.data.data]);
    setLoading(false)
}
const update = async (body) => {
  setLoading(true)
  const response = await axios.put(`${BASE_API}/tasks/update/${body._id}`,body)
  setTasks(tasks.map(e => e._id ===response.data.data._id ? response.data.data : e));
  setLoading(false)
}

  const remove = async (element) => {
    setLoading(true)
    const response = await axios.delete(`${BASE_API}/tasks/delete/${element._id}`)
    setTasks(tasks.filter(e => e._id !== response.data.data._id));
    setLoading(false)
}

  return { 
      loading ,
        tasks,
        add,
        update,
        remove 
}
}
export default useTasksCustomHook
