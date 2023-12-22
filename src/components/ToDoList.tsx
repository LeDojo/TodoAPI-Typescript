import useTodos from "../hooks/useTodo"

function ToDoList() {

    // Utilisation d'un Hooks pour la propreté /useTodo.ts
    const { data: todos, error, isLoading } = useTodos()

    // Méthode conventionelle :

    // const [todos, setTodos] = useState<Todo[]>([])
    // const [error, setError] = useState("")

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/todos")
    //         .then((response) => setTodos(response.data))
    //         .catch((error) => setError(error))
    // }, [])


    if (isLoading) return (<p> loading ... </p>)
    if (error) return (<p>{error.message}</p>)

    return (

        <>
            <ul className="list-group">

                {todos?.map((todo) => (
                    <li key={todo.id} className="list-group-item"> {todo.title}</li>
                ))}

            </ul>

        </>
    )
}

export default ToDoList
