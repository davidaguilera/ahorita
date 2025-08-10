import { useEffect,useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        setTasks(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="p-4 text-center">Cargando tareas...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hola, {user.username}</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 border rounded ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <p className={`font-semibold ${task.completed ? "line-through" : ""}`}>
              {task.title}
            </p>
            <p>Estado: {task.completed ? "Completada" : "Pendiente"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}