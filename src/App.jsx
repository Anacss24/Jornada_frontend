
import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Rick Sanchez',
    imgagemURL: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const item2 = {
    nome: 'Morty Smith',
    imgagemURL: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const item3 = {
    nome: 'Summer Smith',
    imgagemURL: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  const itens = [item1, item2, item3]

  return (
    <>
    {itens.map(function (item){
      return <Card item={item}/>
    })}

    </>
  )
}

export default App
