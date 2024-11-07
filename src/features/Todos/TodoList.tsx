import { useQuery } from "@tanstack/react-query"
import Todo from "./Todo"
import { TodoModel } from "../../models/todo"

export default function TodoList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () =>
      fetch("http://localhost:3000/api/tasks").then((res) => res.json()),
  })

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {isPending && <div className="text-blue-500">Loading...</div>}
      {error && <div className="text-red-500">Error: {error.message}</div>}

      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
          {data.map((todo: TodoModel) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </div>
      )}
    </div>
  )
}
