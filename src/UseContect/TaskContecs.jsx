import React, { Children, createContext } from "react";
import { useContext } from "react";

const data = [
  { id: 1, title: "first choosen ", complet: false },
  { id: 2, title: "second choosen ", complet: false },
  { id: 3, title: "thridy choosen ", complet: false },
];

export const taskConteks = createContext(data);

const TaskContecs = ({ children }) => {
    const [changes, setChanges] = useState(data)
     
    const handelAdd = (object) => {
        setChanges((prev) => [
          ...prev,
          { id: prev.length + 1, title: object.title, complet : object.complet  },
        ]);
    }

    const handelDelete = (obDelete) => {
        setChanges((pDelet) => pDelet.filter (del => del.id !==  obDelete  ))

    }

    const changeState = (obChanges) => {
        setChanges((pchange ) => pchange.map( function functionReturn(date){
            return date.id === obChanges ? { ...date , complet  :  ! date.complet } : date  
              

        }))     }
    
  return <taskConteks.Provider value={{changes , handelAdd, handelDelete , changeState}}>{children}</taskConteks.Provider>;
};

export default TaskContecs;
