import icon from '../../assets/icons/logo.svg'
import groupPet from '../../assets/icons/OBJECTS.svg'
import { Container, HomePage, Title, Medium, Footer} from './styles'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
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
          </div>
        </Footer>
      </HomePage>
    </Container>
  )
}
