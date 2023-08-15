import * as S from './styles'
import { InputTypeScript } from '../../types/Input'
import { useForm } from '../../context/ThemeContext'
import { useState } from 'react'
import useDebounce from './useDebounce'

const delay = 500

export const Input = ({ value, search, selectRegion }: InputTypeScript) => {
  const { state } = useForm()

  const [input, setInput] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false) // New state for dropdown menu
  const [selectedRegion, setSelectedRegion] = useState('') // New state for selected region

  const debouncedChange = useDebounce((value: string) => {
    search(value)
  }, delay)

  const handleChange = (i: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = i.target.value
    setInput(inputValue)
    debouncedChange(inputValue)
  }

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen) // Toggle the dropdownOpen state
  }

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region)
    selectRegion(region)
  }

  const handleSearch = () => {
    search(input)
  }

  return (
    <S.InputArea theme={state.theme}>
      <div className='textAreaDiv'>
        <i className="fa fa-search"></i> <input
          type="text"
          placeholder="Search for a country..."
          value={input}
          onChange={handleChange}
          onBlur={handleSearch} // Trigger search when input loses focus
        />
      </div>

      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleToggleDropdown}>
          Filter by Region <i className={dropdownOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
        </button>

        {/* Only render the dropdown menu if the dropdownOpen state is true */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => handleSelectRegion('')}>
              All Regions
            </div>
            <div className="dropdown-item" onClick={() => handleSelectRegion('Africa')}>
              Africa
            </div>
            <div className="dropdown-item" onClick={() => handleSelectRegion('America')}>
              America
            </div>
            <div className="dropdown-item" onClick={() => handleSelectRegion('Asia')}>
              Asia
            </div>
            <div className="dropdown-item" onClick={() => handleSelectRegion('Europe')}>
              Europe
            </div>
            <div className="dropdown-item" onClick={() => handleSelectRegion('Oceania')}>
              Oceania
            </div>
          </div>
        )}
      </div>
    </S.InputArea>
  )
}
