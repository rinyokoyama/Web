import { useState, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="今日やることを追加..."
        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white"
      >
        <Plus className="size-5" />
        <span className="sr-only">追加</span>
      </Button>
    </form>
  );
}
