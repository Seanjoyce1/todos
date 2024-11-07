import Header from "../../elements/Header/Header"
import TodoList from "../../features/Todos/TodoList"

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="max-w-screen-lg m-auto p-3">
        <TodoList />
      </div>
    </div>
  )
}
