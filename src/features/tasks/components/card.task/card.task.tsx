import { Task } from "../../models/task";

type PropsType = {
  item: Task;
  handleUpdate: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

export function CardTask({ item, handleUpdate, handleDelete }: PropsType) {
  const handleChange = () => {
    item.isCompleted = !item.isCompleted;
    handleUpdate(item);
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
