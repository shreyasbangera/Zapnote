"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { usePathname } from "next/navigation";
import { createNote, fetchNotes } from "../lib/data";
import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';

const Tiptap = () => {
  const pathname = usePathname();
  const [note, setNote] = useState<string>("");
  const [savingNote, setSavingNote] = useState<boolean>(false)
  const noteId = pathname?.split("/note/")[1];
  const timer = useRef(null);

  useEffect(() => {
    async function fetchData() {
      if (noteId) {
        const data = await fetchNotes(noteId);
        setNote(data?.note || "");
      }
    }
    fetchData();
  }, [noteId]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
      }),
    ],
    content: note,
    editorProps: {
      attributes: {
        class:
          "px-4 lg:px-6 py-6 lg:py-8 rounded-lg border-none h-full focus:outline-none outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      debouncedSave(content);
    },
  });

  const debouncedSave = (content: string) => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    setTimeout(() => {
      saveNote(noteId, content);
    }, 500);
  };

  async function saveNote(noteId: string, note: string) {
    setSavingNote(true)
    const data = await createNote(noteId, note);
    if(data){
      setSavingNote(false)
    }
  }

  useEffect(() => {
    if (editor && note) {
      editor.commands.setContent(note);
    }
  }, [note, editor]);

  const handleDownload = () => {
    if (editor) {
      const content = editor.getText();
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `note-${noteId || 'untitled'}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  return (
    <div className="min-h-[85vh] lg:border lg:rounded-lg border-gray-200 dark:border-gray-600 shadow-sm">
      <Toolbar editor={editor} onDownload={handleDownload} />
      <EditorContent
        editor={editor}
        className="overflow-y-auto"
      />
    </div>
  );
};

export default Tiptap;
