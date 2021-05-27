import React from 'react'
import { FormScreen } from './FormScreen'
import { WelcomeScreen } from './WelcomeScreen'
import './HomeScreen.css'

export const HomeScreen = ({ method }) => {
    return (
        <div className="homeContent">
            {
                method === '' ?
                    <WelcomeScreen method={method} />
                    :
                    <FormScreen method={method} />

            }

        </div>
    )
}
