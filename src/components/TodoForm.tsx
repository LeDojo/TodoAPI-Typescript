import { useRef } from "react"

function TodoForm() {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <>
            <form className="row mb-3">

                <div className="col">
                    <input type="text" className="form-control" ref={ref} />
                </div>

                <div className="col">
                    <button className="btn btn-primary"> Ajouter </button>
                </div>

            </form>
        </>
    )
}

export default TodoForm
