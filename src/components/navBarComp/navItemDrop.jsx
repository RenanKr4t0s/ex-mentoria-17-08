export default function NavItemDrop(props){
    let list = props.dropItens.map((element, index)=>{
        return <li key={index}><a className="dropdown-item" href={element.href}>{element.name}</a></li>
    })
    return(
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.name}
          </a>
          <ul className="dropdown-menu">
            {list}
          </ul>
        </li>    
    )
}