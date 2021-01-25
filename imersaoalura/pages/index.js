import styled from 'styled-components'

const Titulo = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Titulo>Minha página</Titulo>
}
