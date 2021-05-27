import React, { useState } from 'react';
import './FormScreen.css';
import { Alert } from './ui/Alert';

//setting the initial states of errors
const initialErrors = {
    name: false,
    email: false,
    phone: false,
    age: false
}

//setting the initial values of form
const initialFormValues = {
    name: '',
    email: '',
    phone: '',
    age: 50
}

//regex for email and phonenumber
const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rePhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{1,6}$/im;

export const FormScreen = ({ method }) => {
    const [formValues, setformValues] = useState(initialFormValues)
    const { name, email, phone, age } = formValues;
    const [errors, setErrors] = useState(initialErrors)
    const [showAlert, setShowAlert] = useState(false)

    //saving the values of inputs
    const handleChange = (e) => {
        setformValues({ ...formValues, [e.target.id]: e.target.value })
    }

    //"sending" the form
    const handleSubmit = (e) => {
        e.preventDefault();

        //check if inputs are ok
        setErrors(initialErrors)
        if (name === '') {
            setErrors((e) => ({ ...e, name: true }))
            return;
        }
        if (email === '' || !reEmail.test(String(email).toLowerCase())) {
            setErrors((e) => ({ ...e, email: true }))
            return;
        }
        if (phone === '' || !rePhone.test(phone)) {
            setErrors((e) => ({ ...e, phone: true }))
            return;
        }
        console.log(formValues)

        //cleaning the form
        setformValues(initialFormValues)

        //show alert for 5 seconds
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000);

    }

    return (
        <div className="formContainer">
            <div className="form_title">
                Hola, bienvenido, sabemos que quieres viajar en un <span>{method}</span>, por favor diligencia el siguiente formulario:
            </div>
            <div className="form">
                <form className="form_form" onSubmit={handleSubmit}>
                    <input type="text" id="name" onChange={handleChange} value={name} placeholder="Nombre completo" />
                    {errors.name && <span className="form_error">El nombre es obligatorio</span>}

                    <input type="text" id="email" onChange={handleChange} value={email} placeholder="Email" />
                    {errors.email && <span className="form_error">El correo es obligatorio o no valido</span>}

                    <input type="text" id="phone" onChange={handleChange} value={phone} placeholder="Celular" />
                    {errors.phone && <span className="form_error">El numero es obligatorio / debe ser numerico</span>}

                    <label>Edad ({age})</label>
                    <input type="range" id="age" min="18" max="100" value={age} onChange={handleChange} className="slider" />

                    <button className="btn">Enviar</button>
                </form>
            </div>
            {
                showAlert &&
                <Alert />
            }
        </div>
    )
}
