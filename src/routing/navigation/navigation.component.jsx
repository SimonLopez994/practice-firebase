import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import './navigation.styles.css'

const Navigation = () => {
    return (
        <Fragment>
            <div className="nav">
                <Link className='inicio' to='/'>
                    INICIO
                </Link>
                <Link className='contacto' to='/contacto'>
                    CONTACTO
                </Link>
                <Link className='sign-in' to='/sign'>
                    SIGN IN
                </Link>
              
            </div>
            <Outlet/>

        </Fragment>

    )
}
export default Navigation;