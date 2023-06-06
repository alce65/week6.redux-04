import { AddTask } from "../add.task/add.task";
import { CardTask } from "../card.task/card.task";
import { useTasks } from "../../hooks/use.tasks";

export default function ToDo() {
  const { tasks } = useTasks();

  return (
    <section>
      <h2>ToDo List</h2>
      <AddTask></AddTask>
      <br />
      <ul>
        {tasks.map((item) => (
          <CardTask item={item} key={item.id}></CardTask>
        ))}
      </ul>
    </section>
  );
}
