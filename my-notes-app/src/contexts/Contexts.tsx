import { createContext } from "react";

type RefreshNotesContextType = {
    refreshNotes: () => void;
    refreshNotesKey: number;
}

//return something initially
export const RefreshNotesContext = createContext<RefreshNotesContextType >({
    refreshNotes: () => {},
    refreshNotesKey: 0
});