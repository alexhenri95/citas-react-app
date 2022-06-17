import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    // useEffect( () => {
    //     if (pacientes.length) {
    //         console.log('nuevo paciente');
    //     }
    // } ,[pacientes]);

    return (
        <div className='md:w-1/2 lg:w-3/5 mt-10 md:mt-0'>
            <h2 className="font-black text-2xl text-center">Listado de Pacientes</h2>
            <p className="text-center text-lg mb-5">
                Administra tus {''}
                <span className="text-indigo-500 font-extrabold">Pacientes y Citas</span>
            </p>

            { pacientes && pacientes.length ? (
                <>
                { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    )
                ) }
                </>
            ) : (
                <>
                    <div className='text-center my-20'>
                        <p>No hay pacientes, comienza agregando pacientes</p>
                        <div className='flex justify-center mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>                   
                </>
            )}
            
            
        </div>
    )
}

export default ListadoPacientes