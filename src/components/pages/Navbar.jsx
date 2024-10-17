import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <h2 ><span className="logo-span">VIATOR Sys</span>Control Inicio</h2>
            </div>
            <div className='nav-list'>
                <ul className='list-item'>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'item')} to="/">Inicio</NavLink></li>
                    <li className='item'><NavLink className={({ isActive }) => (isActive ? 'active' : 'item')} to="/control-inicio"></NavLink></li>
                    <li className='item'><NavLink className={({ isActive }) => (isActive ? 'active' : 'item')} to="/perfil"></NavLink></li>
                    <li className='item'><NavLink className={({ isActive }) => (isActive ? 'active' : 'item')} to="/"></NavLink></li>
                </ul>
            </div>
            <div className='nav-list'>
                <ul className='list-item'>
                    <li className='item'><img src="/svgs/persona.svg" alt="." /></li>
                </ul>
            </div>
        </nav>
    )
}
