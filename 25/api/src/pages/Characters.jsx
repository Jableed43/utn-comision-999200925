import CharacterCard from '../components/CharacterCard'
import useRickAndMortyApi from '../hooks/useRickAndMortyApi'



function Characters() {

  const { characters, error, loading } = useRickAndMortyApi()

  if(loading){
    return (
      <>
        Cargando personajes...
      </>
    )
  }

   if(error){
    return (
      <>
      <h2> Error al cargar los datos </h2>
        {error.message}
      </>
    )
  }

  return (
    <div>
      <CharacterCard characters={characters} />
    </div>
  )
}

export default Characters
