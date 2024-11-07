import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TodoModel } from "../../models/todo"
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons"

export default function Todo(item: TodoModel) {
  const { title, completed, description, createdAt } = item

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex gap-4 items-center shadow-sm p-4 bg-orange-200 rounded-lg min-w-fit">
      <div className="flex flex-col">
        <h2 className="font-inter font-bold">{title}</h2>
        <p className="font-jost">{description}</p>
        <div className="font-inter font-bold">{formattedDate}</div>
      </div>
      <div className="flex flex-col gap-2">
        <FontAwesomeIcon icon={faCircleCheck} />
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  )
}
