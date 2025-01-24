import PendingTodoItem from "./PendingTodoItem";

export default function TodosQueue({ title, subheading, todos }: { title: string, subheading: string, todos: Array<string> }) {
    return (
        <div className="flex flex-col gap-2 w-3/4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{subheading}</p>
            <ul className="flex flex-col gap-2">
                {todos.map((todo, index) => (
                    <PendingTodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
