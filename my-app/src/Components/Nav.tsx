import { Link } from "react-router-dom"
import './Nav.scss'

const Nav = () => {
    return (
        <div className="nav" style={{}}>
            <ul style={{display: 'flex', justifyContent:'center', }}>
                <li >
                    <Link to={`/Home`}>Home</Link>
                </li>
                <li>
                    <Link to={`/Users`}>Users</Link>
                </li>
                <li>
                    <Link to={`/Contact`}>Contact</Link>
                </li>
                <li>
                    <Link to={`/About`}>About</Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav;