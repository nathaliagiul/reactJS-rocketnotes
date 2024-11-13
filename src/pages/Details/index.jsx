import { Container, Links } from "./styles"
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details(){

  return(
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>
      
      <Button title="Voltar"/>
    </Container>
)
}