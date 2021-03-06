// @flow

import React from 'react'

import CitySelector from './CitySelector'

import type { TFunction } from 'react-i18next'
import SearchInput from './SearchInput'
import CityModel from '../../../modules/endpoint/models/CityModel'
import type { ThemeType } from '../../../modules/theme/constants/theme'

type PropsType = {
  cities: Array<CityModel>,
  language: string,
  navigateToDashboard: (city: CityModel) => void,
  t: TFunction,
  theme: ThemeType
}

type StateType = {
  filterText: string
}

class FilterableCitySelector extends React.Component<PropsType, StateType> {
  constructor (props: PropsType) {
    super(props)
    this.state = {filterText: ''}
  }

  onFilterTextChange = (filterText: string) => this.setState({filterText})

  render () {
    const {cities, language, t, theme} = this.props
    const filterText = this.state.filterText

    return (
      <React.Fragment>
        <SearchInput
          filterText={filterText}
          onFilterTextChange={this.onFilterTextChange}
          placeholderText={t('searchCity')}
          spaceSearch={false}
          theme={theme} />
        <CitySelector
          cities={cities}
          filterText={filterText}
          language={language}
          navigateToDashboard={this.props.navigateToDashboard}
          theme={theme}
        />
      </React.Fragment>
    )
  }
}

export default FilterableCitySelector
