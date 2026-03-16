import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        id={`todo-${todo.id}`}
        className="border-cyan-400/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-1 cursor-pointer transition-all ${
          todo.completed
            ? "line-through text-gray-500"
            : "text-white"
        }`}
      >
        {todo.text}
      </label>
      <Button
        variant="ghost"
        size="sm"
        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-300 hover:bg-red-500/10"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 className="size-4" />
        <span className="sr-only">削除</span>
      </Button>
    </div>
  );
}
