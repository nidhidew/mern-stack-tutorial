import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const DAshFooter = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if(pathname !== '/dash'){
        goHomeButton = (
            <button className="dash-footer__buttom icon-button"
                    title="Home"
                    onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>           
        )
    }

    const content = (
        <footer className="dash-footer">
            <p>Current User: </p>
            <p>Status: </p>
        </footer>
    )
  return content
}

export default DAshFooter
