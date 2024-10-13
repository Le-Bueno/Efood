import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import Logo from '../Logo'

import { Container } from '../../global/globalStyle'

import logo from '../../assets/icons/logo.png'

import {
  HeroContainer,
  HeroHeader,
  Text,
  TextContainer,
  Title,
  TitleLink
} from './styles'

type HeroProps = {
  title?: string
  textContent?: string
}

const Hero = ({ textContent, title }: HeroProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function handleOpenCart() {
    dispatch(open())
  }

  function renderHeaderContent(item: string | undefined) {
    if (item === undefined) {
      return <Logo kind="link" cover={logo} title="Logo eFood" to="/" />
    }

    return (
      <HeroHeader>
        <TitleLink to="/">{item}</TitleLink>
        <Logo kind="link" cover={logo} title="Logo eFood" to="/" />
      </HeroHeader>
    )
  }

  return (
    <HeroContainer>
      <Container>
        {renderHeaderContent(title)}

        {textContent && (
          <TextContainer>
            <Text>{textContent}</Text>
          </TextContainer>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
