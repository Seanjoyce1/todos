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
    <div className="flex gap-4 items-start justify-between shadow-sm p-4 bg-orange-200 rounded-lg w-full">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-inter font-bold">{title}</h2>
            <p className="font-jost">{description}</p>
          </div>
          <FontAwesomeIcon
            icon={faCircleCheck}
            color={completed ? "green" : "black"}
            fontSize={24}
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="font-inter font-bold text-sm">{formattedDate}</div>
          <div className="flex flex-row gap-3">
            <FontAwesomeIcon icon={faPenToSquare} fontSize={24} />
            <FontAwesomeIcon icon={faTrashCan} fontSize={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
