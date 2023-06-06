import { SyntheticEvent, useState } from "react";
import { Task } from "../../models/task";
import { useTasks } from "../../hooks/use.tasks";

type FormState = Pick<Task, "title" | "owner">;

export function AddTask() {
  const { handleAdd } = useTasks();

  const [formState, setFormState] = useState<FormState>({
    title: "",
    owner: "",
  });

  const handleChange = (event: SyntheticEvent) => {
    const element = event.target as HTMLFormElement;
    console.dir(element);
    setFormState({
      ...formState,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const task = new Task(formState.title, formState.owner);
    console.log(task);
    handleAdd(task);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formState?.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="owner">Responsable</label>
        <input
          type="text"
          name="owner"
          id="owner"
          value={formState?.owner}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
}
