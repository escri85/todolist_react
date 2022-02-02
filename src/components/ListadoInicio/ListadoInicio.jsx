/* eslint-disable array-callback-return */
import React from 'react';
import Tarea from '../Tarea/Tarea';
const ListadoInicio = ({tareas, cambiarTareas, mostrarCompletadas}) => {
	const toggleCompletada = (id) => {
		cambiarTareas(tareas.map((tarea) => {
			if(tarea.id === id){
				return {...tarea, completada: !tarea.completada}
			}
			return tarea;
		}));
	}

	const editarTarea = (id, nuevoTexto) => {
		cambiarTareas(tareas.map((tarea) => {
			if(tarea.id === id){
				return {...tarea, texto: nuevoTexto}
			}
			return tarea;
		}));
	}

	const borrarTarea = (id) => {
		cambiarTareas(tareas.filter((tarea) => {
			if(tarea.id !== id){
				return tarea;
			}
			// eslint-disable-next-line array-callback-return
			return
		}));
	}

	return (
        <div>
            <h2>INICIO</h2>
		<ul className="lista-tareas">
			{tareas.length > 0 ? tareas.map((tarea) => {
				if(mostrarCompletadas){
					return <Tarea 
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editarTarea={editarTarea}
								borrarTarea={borrarTarea}
							/>
				// Si la tarea no esta completada, la devolvemos.
				} else if(!tarea.completada){
					return <Tarea 
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editarTarea={editarTarea}
								borrarTarea={borrarTarea}
							/>
				}
				// Si ya esta completada no la devolvemos
				return;
			})
			:<div className="lista-tareas__mensaje">~ No hay tareas agregadas ~</div>
			}
		</ul>

        </div>
        
	);
}
 
export default ListadoInicio;