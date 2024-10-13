import React from 'react'
import logo from '../../assets/icons/logo.png'
import { SocialLinks } from '../../utils/list'
import { FooterContainer, SocialIcons, Text } from './styles'
import Logo from '../Logo'

const Footer = () => (
  <FooterContainer>
    <Logo kind="link" cover={logo} title="Logo eFood" to="/" />

    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos. A
      responsabilidade pela entrega e qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer
