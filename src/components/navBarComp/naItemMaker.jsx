import NavItem from "./navItem"

export default function NavItemMaker(props){
    let list = props.navItens.map((element, index)=>{
        return <NavItem  key={index} href={element.href} name={element.name} domRouter={props.domRouter}/>
    })
    return(<>{list}</>)
}