import React from 'react'
import Tiptap from '@/app/components/TipTap'
import { fetchNotes } from '@/app/lib/data';

export default async function page({params} : {params: Promise<{noteId: string}>}) {
  const noteId = (await params).noteId
  const noteData = await fetchNotes(noteId);
  return (
    <div className="pt-16">
    <Tiptap content={noteData?.note || ""} noteId={noteId} />
    </div>
  )
}
