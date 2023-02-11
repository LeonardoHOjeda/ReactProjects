import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    
  })

  test('getHeroeById debe de retornar undefined si no existe el ID', () => {
    const id = 100
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()
  })

  test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'
    const returnOwner = getHeroesByOwner(owner)

    expect(returnOwner).toHaveLength(3)
    expect(returnOwner).toEqual([{ id: 1, name: 'Batman', owner: 'DC' }, { id: 3, name: 'Superman', owner: 'DC' },{ id: 4, name: 'Flash', owner: 'DC'}])
  })

  test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'DC'
    const returnOwner = getHeroesByOwner(owner)

    console.log(returnOwner);

    expect(returnOwner).toHaveLength(3)
  })
})