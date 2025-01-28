"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { createNote } from "../lib/data";
import { useEffect, useRef } from "react";
import Toolbar from "./Toolbar";
import TextAlign from "@tiptap/extension-text-align";
interface TiptapProps {
  content: string;
  noteId: string;
}

export default function Tiptap({ content, noteId }: TiptapProps) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "px-4 lg:px-8 py-6 lg:py-8 rounded-lg border-none h-full focus:outline-none outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl",
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      debouncedSave(content);
    },
    autofocus: true,
  });

  const debouncedSave = (content: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      saveNote(noteId, content);
    }, 500);
  };

  async function saveNote(noteId: string, note: string) {
    await createNote(noteId, note);
  }

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const handleDownload = () => {
    if (editor) {
      const content = editor.getText();
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `note-${noteId || "untitled"}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] shadow-sm">
      <Toolbar editor={editor} onDownload={handleDownload} />
      <div className="flex-grow overflow-hidden">
        <EditorContent editor={editor} className="h-full overflow-y-auto" />
      </div>
    </div>
  );
}
