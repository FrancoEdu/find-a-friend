import icon from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import groupPet from '../../assets/icons/OBJECTS.svg'
import { Container, HomePage, Title, Medium, Footer} from './styles'
import { useFetch } from '@/hooks/useFetch'
import { useState } from 'react'

type UF = {
  id: number,
  sigla: string,
  nome: string,
  regiao: {
    id: number,
    sigla: string,
    nome: string,
  }
}

export function Home() {
  
  const { data: estados } = useFetch<UF[]>("http://localhost:3333/location/states")

  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {

  }

  function handleChangeCity() {
    // TO DO
  }

  return( 
    <Container>
      <HomePage>
        <Title>
          <img src={icon} alt="Logo find a friend" />
          <h2>FindAFriend</h2>
        </Title>
        <Medium>
          <div>
            <h1>Leve <br />
              a felicidade <br /> 
              para o seu lar
            </h1>
          </div>
          <img src={groupPet} alt="Grupo de Pets" />
        </Medium>
        <Footer>
          <p>
            Encontre o animal de estimação ideal <br />
            para seu estilo de vida
          </p>
          <div>
            Busque um amigo: 
            <select className='state'>
              {
                estados?.map(uf =>{
                  return(
                    <option key={uf.id}>{uf.sigla}</option>
                  )
                })
              }
            </select>
            <select className='city'>
              <option value="">Estado</option>
            </select>
            <button type="submit">
              <img src={search} alt=""/>
            </button>
          </div>
        </Footer>
      </HomePage>
    </Container>
  )
}
