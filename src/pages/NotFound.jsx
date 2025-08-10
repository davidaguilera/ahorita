import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Página no encontrada</p>
      <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}