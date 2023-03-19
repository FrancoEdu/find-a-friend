import icon from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import groupPet from '../../assets/icons/OBJECTS.svg'
import { Container, HomePage, Title, Medium, Footer} from './styles'
import { useEffect, useState } from 'react'
import { api } from '@/services/http'
import { Select } from '@/components/Select'

interface ISelectOptions {
  value: string | number
  label: string
}

interface UF{
  states: [{
    id: number,
    sigla: string,
    nome: string,
    regiao: {
      id: number,
      sigla: string,
      nome: string,
	  }
  }]
}

interface CITYS{
  citys: [{
    name: string,
    code: string,
  }]
}

export function Home() {
  
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [states, setStates] = useState<ISelectOptions[]>([])
  const [citys, setCitys] = useState<ISelectOptions[]>([])

  function handleSearchPets(){
  }

  async function handleChangeState(){
  }

  function handleChangeCity(){
  }


  useEffect(() => {
    
  }, [])

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
            <Select className='state' name="UF" label="" options={states} onChange={handleChangeState}>
            </Select>
            <Select className='city' name="Cidade" label="" options={citys} onChange={handleChangeCity}>
            </Select>
            <button type="submit" onClick={handleSearchPets} disabled={!state || !city}>
              <img src={search} alt=""/>
            </button>
          </div>
        </Footer>
      </HomePage>
    </Container>
  )
}
