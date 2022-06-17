
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { mascota, email, propietario, fechaAlta, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar el paciente: ', mascota);
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className='mt-5 bg-gray-200 shadow-lg py-5 px-4 text-black rounded-md'>
            <p className='font-bold text-gray-800'>
                Mascota: {''}
                <span className='font-normal'>{mascota}</span>
            </p>
            <p className='font-bold text-gray-800'>
                Propietario: {''}
                <span className='font-normal'>{propietario}</span>
            </p>
            <p className='font-bold text-gray-800'>
                Email: {''}
                <span className='font-normal'>{email}</span>
            </p>
            <p className='font-bold text-gray-800'>
                Fecha de alta: {''}
                <span className='font-normal'>{fechaAlta}</span>
            </p>
            <p className='font-bold text-gray-800'>
                Síntomas: {''}
                <span className='font-normal'>{sintomas}</span>
            </p>

            <div className='flex justify-between items-center mt-4'>
                <button className='py-2 px-8 text-sm bg-indigo-700 hover:bg-indigo-800 rounded-md text-white font-semibold uppercase'
                    onClick={ () => setPaciente(paciente) }
                    type='button'    
                >
                    Editar
                </button>

                <button className='py-2 px-8 text-sm bg-red-700 hover:bg-red-800 rounded-md text-white font-semibold uppercase'
                    type='button' 
                    onClick={ handleEliminar}   
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente