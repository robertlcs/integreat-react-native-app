// @flow

import * as React from 'react'

import SelectorItemModel from '../models/SelectorItemModel'
import styled, { css } from 'styled-components'

type PropsType = {
  verticalLayout: boolean,
  closeDropDownCallback?: () => void,
  items: Array<SelectorItemModel>,
  activeItemCode?: string,
  inactiveItemTooltip: string
}


const Element = styled(View)`
  ${props => props.theme.helpers.removeLinkHighlighting};
  height: ${props => props.theme.dimensions.headerHeightLarge}px;
  min-width: 90px;
  max-width: 120px;
  flex: 1 1 90px;
  font-size: 1.2em;
  line-height: ${props => props.theme.dimensions.headerHeightLarge}px;
  text-align: center;
  border-radius: 30px;
  transition: background-color 0.2s, border-radius 0.2s;
  user-select: none;

  @media ${props => props.theme.dimensions.smallViewport} {
    height: ${props => props.theme.dimensions.headerHeightSmall}px;
    min-width: 70px;
    flex: 1 1 70px;
    font-size: 1em;
    line-height: ${props => props.theme.dimensions.headerHeightSmall}px;
  }
`

export const ActiveElement = styled(Element)`
  ${props => props.selected
  ? `font-weight: 700;`
  : `:hover {
      font-weight: 700;
      border-radius: 0;
    }`}
  color: ${props => props.theme.colors.textColor};
`

export const InactiveElement = styled(Element.withComponent('span'))`
  color: ${props => props.theme.colors.textSecondaryColor};
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  color: ${props => props.theme.colors.textColor};
  text-align: center;
  
  ${props => props.vertical && css`
    flex-flow: column;
    align-items: center;
  
    & ${Element} {
      flex: 1;
    }
  `}
`


/**
 * Displays a Selector showing different items
 */
class Selector extends React.Component<PropsType> {
  componentDidMount () {
    /* https://www.npmjs.com/package/react-tooltip#1-using-tooltip-within-the-modal-eg-react-modal- */
    ReactTooltip.rebuild()
  }

  componentDidUpdate () {
    /* https://www.npmjs.com/package/react-tooltip#1-using-tooltip-within-the-modal-eg-react-modal- */
    ReactTooltip.rebuild()
  }

  getItems (): React.Node {
    const {items, activeItemCode, closeDropDownCallback, inactiveItemTooltip} = this.props
    return items.map(item => {
      if (item.href) {
        return (
          <ActiveElement key={item.code}
                         onClick={closeDropDownCallback}
                         to={item.href}
                         selected={item.code === activeItemCode}>
            {item.name}
          </ActiveElement>
        )
      } else {
        return (
          <InactiveElement data-tip={inactiveItemTooltip} key={item.code}>
            {item.name}
          </InactiveElement>
        )
      }
    })
  }

  render () {
    return (
      <Wrapper vertical={this.props.verticalLayout}>
        {this.getItems()}
      </Wrapper>
    )
  }
}

export default Selector