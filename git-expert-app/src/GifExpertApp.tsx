import { useState } from 'react'
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory: string) => {
    if(categories.includes(newCategory)) return
    console.log(newCategory);
    
    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event: any) => onAddCategory(event)}/>
      {categories.map(category => (
        <GifGrid category={category} key={category}/>
      ))}
    </>
  )
}

