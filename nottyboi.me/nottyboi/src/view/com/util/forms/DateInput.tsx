import React, {useState, useCallback} from 'react'
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native'
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome'
import {isIOS, isAndroid} from 'platform/detection'
import {Button, ButtonType} from './Button'
import {Text} from '../text/Text'
import {TypographyVariant} from 'lib/ThemeContext'
import {useTheme} from 'lib/ThemeContext'
import {usePalette} from 'lib/hooks/usePalette'
import {getLocales} from 'expo-localization'
import DatePicker from 'react-native-date-picker'

const LOCALE = getLocales()[0]

interface Props {
  testID?: string
  value: Date
  onChange: (date: Date) => void
  buttonType?: ButtonType
  buttonStyle?: StyleProp<ViewStyle>
  buttonLabelType?: TypographyVariant
  buttonLabelStyle?: StyleProp<TextStyle>
  accessibilityLabel: string
  accessibilityHint: string
  accessibilityLabelledBy?: string
  handleAsUTC?: boolean
}

export function DateInput(props: Props) {
  const [show, setShow] = useState(false)
  const theme = useTheme()
  const pal = usePalette('default')

  const formatter = React.useMemo(() => {
    return new Intl.DateTimeFormat(LOCALE.languageTag, {
      timeZone: props.handleAsUTC ? 'UTC' : undefined,
    })
  }, [props.handleAsUTC])

  const onChangeInternal = useCallback(
    (date: Date) => {
      setShow(false)
      props.onChange(date)
    },
    [setShow, props],
  )

  const onPress = useCallback(() => {
    setShow(true)
  }, [setShow])

  const onCancel = useCallback(() => {
    setShow(false)
  }, [])

  return (
    <View>
      {isAndroid && (
        <Button
          type={props.buttonType}
          style={props.buttonStyle}
          onPress={onPress}
          accessibilityLabel={props.accessibilityLabel}
          accessibilityHint={props.accessibilityHint}
          accessibilityLabelledBy={props.accessibilityLabelledBy}>
          <View style={styles.button}>
            <FontAwesomeIcon
              icon={['far', 'calendar']}
              style={pal.textLight as FontAwesomeIconStyle}
            />
            <Text
              type={props.buttonLabelType}
              style={[pal.text, props.buttonLabelStyle]}>
              {formatter.format(props.value)}
            </Text>
          </View>
        </Button>
      )}
      {(isIOS || show) && (
        <DatePicker
          timeZoneOffsetInMinutes={0}
          modal={isAndroid}
          open={isAndroid}
          theme={theme.colorScheme}
          date={props.value}
          onDateChange={onChangeInternal}
          onConfirm={onChangeInternal}
          onCancel={onCancel}
          mode="date"
          testID={props.testID ? `${props.testID}-datepicker` : undefined}
          accessibilityLabel={props.accessibilityLabel}
          accessibilityHint={props.accessibilityHint}
          accessibilityLabelledBy={props.accessibilityLabelledBy}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})
