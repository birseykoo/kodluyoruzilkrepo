// import React from 'react'


// function Header({number,data}) {
//     console.log('Header')
//   return (
//     <div>Header - {number}
//     <h1>{data.name}</h1>
//     </div>
//   )
// }

// export default React.memo(Header)


import {useTheme} from './ThemeContext'

function Header() {
  const {theme,setTheme} = useTheme();
  return (
    <div>
      <h1>{theme}</h1>

      <button onClick={()=>setTheme(theme === "light"?"dark":"light" )}>Clik</button>
    </div>
  )
}

export default Header