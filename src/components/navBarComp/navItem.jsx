import {Link} from 'react-router-dom'

export default function NavItem(props){
  return(
      <li className="nav-item">
                {props.domRouter ? <Link className="nav-link" to={props.href}>{props.name}</Link> : <a className="nav-link" aria-current="page" href={props.href}>{props.name}</a>}
      </li>
  )
}
