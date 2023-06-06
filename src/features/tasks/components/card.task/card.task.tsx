import { useTasks } from "../../hooks/use.tasks";
import { Task } from "../../models/task";

type PropsType = {
  item: Task;
};

export function CardTask({ item }: PropsType) {
  const { handleUpdate, handleDelete } = useTasks();

  const handleChange = () => {
    handleUpdate({ ...item, isCompleted: !item.isCompleted });
  };

  const handleClick = () => {
    console.log("Deleting");
    handleDelete(item);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={handleChange}
      />
      <span>
        <span>{item.id}</span>
        <span>{item.title}</span>
        <span>{item.owner}</span>
      </span>
      <i className="button" role="button" onClick={handleClick}>
        🗑️
      </i>
    </li>
  );
}
