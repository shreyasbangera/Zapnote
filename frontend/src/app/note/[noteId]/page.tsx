import React, { Suspense } from 'react'
import Tiptap from '@/app/components/TipTap'
import { fetchNotes } from '@/app/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

export default async function page({params} : {params: {noteId : string}}) {
  const noteData = await fetchNotes(params.noteId);
  return (
    <div className="lg:px-6 pt-16 lg:pt-20">
    <Tiptap content={noteData?.note || ""} noteId={params.noteId} />
    </div>
  )
}
