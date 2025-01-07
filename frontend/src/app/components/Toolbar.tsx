import { type Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Download,
  File,
  Italic,
  List,
  ListOrdered,
  Redo,
  Underline,
  Undo,
} from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ToolbarProps {
  editor: Editor | null;
  onDownload: () => void
}

export default function Toolbar({ editor, onDownload }: ToolbarProps) {
  const router = useRouter()
  
  if (!editor) {
    return;
  }

  const handleCreateNote = () => {
    const noteId = nanoid()
    router.push(`/note/${noteId}`)
  }

  const handleTextSize = (size: string) => {
    editor.chain().focus().clearNodes().run()
    if (size === 'small') {
      editor.chain().focus().setParagraph().run()
    } else if (size === 'normal') {
      editor.chain().focus().toggleHeading({ level: 3 }).run()
    } else if (size === 'large') {
      editor.chain().focus().toggleHeading({ level: 2 }).run()
    } else if (size === 'huge') {
      editor.chain().focus().toggleHeading({ level: 1 }).run()
    }
  }

  return (
    <div className="flex border-y h-[56px] md:px-4 border-gray-200 dark:border-gray-600 py-2 overflow-x-auto whitespace-nowrap">
      <div className="px-2 space-x-1 border-r rounded-none border-gray-200 dark:border-gray-600">
      <Toggle
        size="sm"
        onPressedChange={() => handleCreateNote()}>
      <File className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("undo")}
        onPressedChange={() => editor.commands.undo()}
      >
        <Undo className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("undo")}
        onPressedChange={() => editor.commands.redo()}
      >
        <Redo className="h-4 w-4" />
      </Toggle>
      </div>
      <div className="flex px-2 space-x-1 border-r rounded-none border-gray-200 dark:border-gray-600">
      <Select defaultValue="small" onValueChange={handleTextSize}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Text size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">Small</SelectItem>
          <SelectItem value="normal">Normal</SelectItem>
          <SelectItem value="large">Large</SelectItem>
          <SelectItem value="huge">Huge</SelectItem>
        </SelectContent>
      </Select>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "left" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
      >
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "center" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("center").run()
        }
      >
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: "right" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
      >
        <AlignRight className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("codeBlock")}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code className="h-4 w-4" />
      </Toggle>
      </div>
      <Button className= "border-none mx-2" onClick={onDownload} size="sm" variant="outline">
        <Download className="h-4 w-4 lg:mr-1" />
      </Button>
    </div>
  );
}
