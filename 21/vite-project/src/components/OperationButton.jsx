
function OperationButton({ operation, callback }) {
    
    return (
        // Cuando a un evento le tenes que pasar un parametro, se hace asi...
        // callback es una funcion que se pasa como parametro de otra funcion
        // la funcion que gobierna al callback controla su ejecucion y el argumento
        // de su parametro
        <button onClick={() => callback(operation)} > {operation} </button>
    )
}

export default OperationButton