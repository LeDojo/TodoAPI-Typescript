import axios from "axios"
import { Todo } from "../interface"
import { useQuery } from "@tanstack/react-query"


/* 
En gros c'est un UseEffect sur l'API, en plus puissant ducoup
 En plus, il limite les appels en fonction des changement sur API pratique lol
 Faisable uniquement sur Typescript 

 npm i @tanstack/react-query@4.28

 -> pour utilisé useQuery (qu'on appel dans main.tsx) la règle dit qu'on doit use Provider.

 */

const useTodos = () => {

    const fetchTodos = () => axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.data)

    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 10 * 1000
    })
}

export default useTodos