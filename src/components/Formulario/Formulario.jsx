import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import Button from '../Button';
const Formulario = ({tareas,cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState('');

	const handleInput = (e) => {
		cambiarInputTarea(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		cambiarTareas(
			[
				...tareas, 
				{
					id: uuidv4(),
					texto: inputTarea,
					completada: false
				}
			]
		);
		cambiarInputTarea('');
	}

	return (
		<form action="" className="formulario-tareas" onSubmit={handleSubmit}>
			<Input
				type="text"
				className="formulario-tareas__input"
				placeholder="Escribe una tarea"
				value={inputTarea}
				onChange={(e) => handleInput(e)}
			/>
			<Button 
				type="submit"
				className="formulario-tareas__btn"
			>Añadir a listado de inicio
			</Button>
		</form>
	);
};

export default Formulario;
