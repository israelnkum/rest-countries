import * as S from './styles'
import { useForm } from '../../context/ThemeContext'
import { themeActions } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

export const Header = () => {
    const { state, dispatch } = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return (
        <S.Header theme={state.theme}>
            <div className='container'>
            <Link to="/"><h1>Where in the world?</h1></Link>
                <p onClick={handleChangeTheme}>
                    <i className={state.theme === 'light' ? 'far fa-moon' : 'fa fa-moon'}></i>
                    {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'} {/* Conditionally render the text */}
                </p>
            </div>
        </S.Header>
    )
}


