import { Container, Profile } from './styles'
export function Header() {
  return (
    <Container>
       <Profile>
        <img
          src="https://github.com/nathaliagiul.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Nathalia Alves</strong>
        </div>
      </Profile>
    </Container>
  )
}