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
    <div className="">
      {isPending && <div className="text-blue-500">Loading...</div>}
      {error && <div className="text-red-500">Error: {error.message}</div>}

      {data && (
        <div className="flex flex-row gap-2 flex-wrap">
          {data.map((todo: TodoModel) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </div>
      )}
    </div>
  )
}
