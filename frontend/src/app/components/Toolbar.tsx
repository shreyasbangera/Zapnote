import { type Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
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

interface ToolbarProps {
  editor: Editor | null;
  onDownload: () => void
}

export default function Toolbar({ editor, onDownload }: ToolbarProps) {
  if (!editor) {
    return;
  }

  const router = useRouter()

  const handleCreateNote = () => {
    const noteId = nanoid()
    router.push(`/note/${noteId}`)
  }

  return (
    <div className="border-b border-gray-200 dark:border-gray-600 px-2 lg:px-4 py-2 overflow-x-auto whitespace-nowrap">
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
        className="border-r pr-[22px] rounded-none border-gray-200 dark:border-gray-600"
      >
        <Redo className="h-4 w-4" />
      </Toggle>
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
        className="border-r pr-[22px] rounded-none border-gray-200 dark:border-gray-600"
      >
        <AlignRight className="h-4 w-4" />
      </Toggle>
      <Button className="ml-3 border-none" onClick={onDownload} size="sm" variant="outline">
        <Download className="h-4 w-4 lg:mr-1" />
        <p className="hidden lg:block">Download</p>
      </Button>
    </div>
  );
}
