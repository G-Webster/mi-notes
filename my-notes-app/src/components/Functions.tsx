import { NoteContent } from "./Types";


export function sortRecentNotes(array: NoteContent[]) {

    return array.sort((a, b) => {
        return b.id - a.id
    })
}