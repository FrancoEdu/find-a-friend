import icon from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import groupPet from '../../assets/icons/OBJECTS.svg'
import { Container, HomePage, Title, Medium, Footer} from './styles'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '@/services/http'
import { Select } from '@/components/Select'

interface ISelectOptions {
  value: string | number
  label: string
}

interface IState {
  nome: string
  sigla: string
}

interface ICity {
  name: string
  code: string
}

interface IResponseState {
  states: IState[]
}

interface IResponseCity {
  citys: ICity[]
}


export function Home() {
  
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [states, setStates] = useState<ISelectOptions[]>([])
  const [citys, setCitys] = useState<ISelectOptions[]>([])

  const navigate = useNavigate()

  function handleSearchPets() {
    const queryParams = new URLSearchParams({
      state,
      city,
    })
    navigate(`/map?${queryParams.toString()}`)
  }

  async function handleChangeState(e: any) {
    const newState = e.target.value
    setState(newState)
    const { data } = await api.get<IResponseCity>(`/location/citys/${newState}`)
    const dataMapped = data.citys
      .map((city) => ({
        label: city.name,
        value: city.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
    setCitys(dataMapped)
  }

  function handleChangeCity(e: any) {
    setCity(e.target.value)
  }


  useEffect(() => {
    const loadStates = async () => {
      const { data } = await api.get<IResponseState>('/location/states')
      const dataMapped = data.states
        .map((state) => ({
          label: state.sigla,
          value: state.sigla,
        }))
        .sort((a, b) => a.label.localeCompare(b.label))
      setStates(dataMapped)
    }
    loadStates()
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
