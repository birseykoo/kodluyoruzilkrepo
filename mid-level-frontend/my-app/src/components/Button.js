import {useTheme} from './ThemeContext'

function Button() {

    const {theme,setTheme} = useTheme()
  return (
    <div>
        <h1>{theme}</h1>
    <button onClick={()=>setTheme(theme === "light"?"dark":"light" )}>Clik</button>
    </div>
  )
}

export default Button