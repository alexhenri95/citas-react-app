import { useState, useEffect } from "react"
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFechaAlta(paciente.fechaAlta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validando
        if ([mascota, propietario, email, fechaAlta, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        
        //objeto de paciente
        const objPaciente = {
            mascota,
            propietario,
            email,
            fechaAlta,
            sintomas
        }

        if (paciente.id) {
            //EDITANDO REGISTRO
            objPaciente.id = paciente.id;

            const pacientesActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);

            setPacientes(pacientesActualizado);
            setPaciente({});
        }else{
            //NUEVO REGISTRO
            objPaciente.id = generarId();
            setPacientes([ objPaciente, ...pacientes ]);
        }

        //reicinicar campos
        setMascota('');
        setPropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-2xl text-center">Seguimiento pacientes</h2>
            <p className="text-center text-lg">
                Añade tus Pacientes y {''}
                <span className="text-indigo-500 font-extrabold">Administralos</span>
            </p>

            <form onSubmit={ handleSubmit } className="bg-gray-200 shadow-lg rounded-md py-5 px-4 text-black mt-5">
                
                { error && <Error mensaje="(*) Todos los campos son requeridos."/> }

                <div className="mb-3">
                    <label htmlFor="mascota" className="font-bold block text-gray-800">Nombre Mascota</label>
                    <input 
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-1 placeholder-indigo-600 rounded"
                        value={ mascota }
                        onChange={ e => setMascota(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="propietario" className="font-bold block text-gray-800">Nombre Propietario</label>
                    <input 
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-1 placeholder-indigo-600 rounded"
                        value={ propietario }
                        onChange={ e => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="font-bold block text-gray-800">Email</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email de propietario"
                        className="border-2 w-full p-2 mt-1 placeholder-indigo-600 rounded"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fechaAlta" className="font-bold block text-gray-800">Fecha de Alta</label>
                    <input 
                        type="date"
                        id="fechaAlta"
                        className="border-2 w-full p-2 mt-1 placeholder-indigo-600 rounded"
                        value={ fechaAlta }
                        onChange={ e => setFechaAlta(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sintomas" className="font-bold block text-gray-800">Síntomas</label>
                    <textarea 
                        id="sintomas" 
                        rows="4"
                        className="border-2 w-full p-2 mt-1 placeholder-indigo-400 rounded"
                        value={ sintomas }
                        onChange={ e => setSintomas(e.target.value) }
                        placeholder="Detalle los síntomas...">
                    </textarea>
                </div>

                <input
                    value={ paciente.id ? 'Actualizar paciente' : 'Registrar Paciente' } 
                    type="submit"
                    className="w-full bg-indigo-700 hover:bg-indigo-800 p-3 text-white uppercase font-bold text-center rounded-md cursor-pointer transition-all"
                />
            </form>
        </div>
    )
}

export default Formulario