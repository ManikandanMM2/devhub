import React, { SFC } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'

import { IconProps } from 'react-native-vector-icons/Icon'
import { Omit } from 'shared-core/dist/types'
import { Octicons as Icon } from '../../../libs/vector-icons'
import { contentPadding } from '../../../styles/variables'

export interface CardIconProps extends Omit<IconProps, 'accessibilityRole'> {}

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    marginLeft: contentPadding,
  } as ViewStyle,
})

export const CardIcon: SFC<CardIconProps> = props => {
  return <Icon {...props} style={[styles.container, props.style]} />
}