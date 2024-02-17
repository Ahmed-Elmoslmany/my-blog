import React, {useContext} from 'react'
import { ThemeContext } from '../App'
function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className='container' data-theme={isDark ? "dark" : "light"}>
    <div >footer</div>
    <div >footer</div>
    <div >footer</div>
    <div >footer</div>
    <div >footer</div>
    </div>
  )
}

export default Footer