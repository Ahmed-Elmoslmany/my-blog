import React, {useContext} from 'react'
import { ThemeContext } from '../App'
function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className='container' data-theme={isDark ? "dark" : "light"}>
      <h1>أحمد المسلماني، مهندس برمجيات👨‍💻</h1>
      <br/>
      <h1>شغوف بمجال الباك إند</h1>
    </div>
  )
}

export default Footer