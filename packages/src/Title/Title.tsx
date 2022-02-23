import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  return <Title>{children}</Title>
}
