// @flow

import React from 'react'

import CityModel from '../../../modules/endpoint/models/CityModel'
import styled from 'styled-components'
import { Text } from 'react-native-elements'
import { View } from 'react-native'
import type { ThemeType } from '../../../modules/theme/constants/theme'

export const CityListItem = styled.TouchableHighlight`
  padding: 7px;
`

type PropType = {
  city: CityModel,
  language: string,
  filterText: string,
  navigateToDashboard: (city: CityModel) => void,
  theme: ThemeType
}

class CityEntry extends React.PureComponent<PropType> {
  navigateToDashboard = () => {
    this.props.navigateToDashboard(this.props.city)
  }

  render () {
    const {city} = this.props
    return (
      <View>
        <CityListItem onPress={this.navigateToDashboard} underlayColor={this.props.theme.colors.backgroundAccentColor}>
          <Text>{city.name}</Text>
        </CityListItem>
      </View>
    )
  }
}

export default CityEntry
