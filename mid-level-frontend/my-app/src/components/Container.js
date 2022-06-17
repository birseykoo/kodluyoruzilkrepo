import Header from './Header'
import Button from './Button';
import {useTheme} from './ThemeContext'
import Profile from './Profile';



function Container() {
    const {theme} = useTheme()

  return (
    <div className={`app ${theme==='dark'?theme:'light'}`}>
          <Button />
      <Header />

      <Profile/>
    </div>
  )
}

export default Container