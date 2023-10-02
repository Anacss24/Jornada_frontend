
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {
  // const item1 = {
  //   nome: 'Rick Sanchez',
  //   imagemURL: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //   tags: ['Status: Vivo', 'Espécie: Humana']
  // }

  // const item2 = {
  //   nome: 'Morty Smith',
  //   imagemURL: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //   tags: ['Origem: Terra C-137']
  // }
  // const item3 = {
  //   nome: 'Summer Smith',
  //   imagemURL: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }

  // const itens = [item1, item2, item3]

  // TODO: Implementar lista de itens

  const [itens, setItens] = useState([])

  //useState do React traz duas coisas:
  //1. O estado contendo o valor
  //2. A funcção que atualiza o valor do estado
  //     Quando executado, a função também re-renderiza o componente automaticamente 

async function carregarDadosApi(){
 const response = await fetch("https://rickandmortyapi.com/api/character/")

 const json = await response.json()

 const results = json.results

 setItens(results)

}
// useEffct recebe duas informações:
// 1. Função contendo o efeito que será protegido pelo useEffect
// 2. Dependências que controlam e executam do useEffect. Array vazio para executar apenas 1 vez
useEffect(function (){
  carregarDadosApi()
}, [])

carregarDadosApi();


  return (
    <>
    {itens.map(function (item, index){
      return <Card item={item} key={`card_${index}`}/>
    })}

    </>
  )
}

export default App
