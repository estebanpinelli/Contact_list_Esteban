import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
 

export const Registro = () => {

	const {actions} = useContext(Context)
	const [data, setData] = useState({})
	const navigate = useNavigate()

	const handleChange = (event) => {
		setData({...data, [event.target.id]: event.target.value, agenda_slug: 'The_Agenda'})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(data)

		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 
				'Content-Type': 'application/json'
			}
		}

		fetch("https://playground.4geeks.com/apis/fake/contact/", config)
			.then((res) => res.json())
			.then((response) => {
				console.log('Success:', response);
				actions.loadContacts();
			})
			.catch(error => console.error('Error:', error));

		navigate ('/');		
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="col-8 m-auto">
				<h3 className="display-6 text-primary"> Datos del contacto </h3>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Nombre</label>
						<input type="text" className="form-control" id="full_name" placeholder="Nombre" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Email</label>
						<input type="text" className="form-control" id="email" placeholder="Email" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="Address" className="Dirección">Dirección</label>
						<input type="text" className="form-control" id="address" placeholder="Dirección" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Teléfono</label>
						<input type="phone" className="form-control" id="phone" placeholder="Teléfono" onChange={handleChange}/>
					</div>
				
					<button type="submit" className="btn btn-primary mt-3" role="button">
						Registrar Contacto
					</button>
				</div>
			</form>
			
			<div className="col-8 m-auto mt-2">
			<Link to="/"><button type="button" className="btn btn-light">
					Volver a contactos
				</button></Link>
				</div>
		</>
	);
};
