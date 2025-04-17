import { useState } from "react";
import { ContextProps } from "../components/Types";
import { RefreshNotesContext } from "./Contexts";


 const RefreshNotesProvider = ( {children}:ContextProps ) => {
   const [refreshNotesKey, setRefreshNotesKey] = useState<number>(0);

     const refreshNotes = (): void => {
        setRefreshNotesKey(Math.random());
      //   console.log('Notes have refreshed');
     }

    return(
         <RefreshNotesContext.Provider value={{refreshNotes, refreshNotesKey}}>
            {children}
         </RefreshNotesContext.Provider>

    )

}

export default RefreshNotesProvider;