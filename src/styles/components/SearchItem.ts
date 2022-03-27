import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.colors.tertiaryBackground};
  flex-direction: column;
`

export const InternalContainer = styled.div`
  display: flex;
  width: 100%;
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 8rem;
  padding: 0.5rem;

  @media (max-width: 700px) {
    width: 8rem;
  }
`

export const ProductImg = styled.img`
  object-fit: contain;
  width: 6rem;
  max-height: 7rem;
`

export const Divider = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.secondaryBackground};
  height: 2px;
  width: 98%;
  align-self: center;
`
export const ContainerInfo = styled.div`
  display: flex;
  width: 100%;
`

export const PriceAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CityName = styled.div`
  display: flex;
  width: 10rem;
  justify-content: center;
  font-size: 0.75rem;
  align-items: center;
`

export const Price = styled.span`
  font-size: 1.3rem;
  padding: 0.5rem;
`

export const Title = styled.span`
  padding: 0.5rem;
`
