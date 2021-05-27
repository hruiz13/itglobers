import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import './Alert.css'


export const Alert = () => {
    return (
        <div className="alert__modal">
            <div className="alert__modal-content">
                <div>
                    <FaRegCheckCircle size="50" color="#275DAD" />
                </div>
                <div className='mt-2'>
                    Tu información fue enviada con éxito, estaremos en contacto
                    contigo
                </div>
            </div>
        </div>
    )
}
