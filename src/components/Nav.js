import React,{useState} from 'react';
import "./Nav.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes } from '@fortawesome/free-solid-svg-icons'


 

function Nav() {
 // Declare a new state variable, which we'll call "count"
 const [showMenu, setShowMenu] = useState(false);
 
 const handelClick =() => {
  showMenu? setShowMenu(false) : setShowMenu(true);
  
 }
 console.log(showMenu)

  return (
    <div className= {`nav ${showMenu && 'show'}`} > 
    
    {/* dive of the Logo */}
    <div className='nav__logo'> Logo </div>
    {/* dive of the Menu*/}
    <button className='nav__bar' onClick={handelClick}> <FontAwesomeIcon icon={faBars} />  </button>
  
    <nav className='nav__links' > 
   
        <a href='/' className='nav__link' >Aceuil</a>
        <a href='/' className='nav__link' >Menu</a>
        <a href='/' className='nav__link' >Vin</a>
        <a href = '/' className='nav__link' > Pizza </a>
      
    </nav>
    {/*<button className ='nav__btn2'>{<FontAwesomeIcon icon={faTimes}/> }</button>*/}
    </div>

  )
}

export default Nav