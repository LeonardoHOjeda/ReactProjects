import { ChangeEvent, useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if(inputValue.trim().length <= 1) return

    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form action="" onSubmit={onSubmit}>
      <input type="text" placeholder='Buscar gifs' value={inputValue} onChange={ onInputChange }/>
    </form>
  )
}
