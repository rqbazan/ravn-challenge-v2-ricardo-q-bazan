import mapValues from 'lodash.mapvalues'

import twConfig from '@/tailwind.config'

const twCustomTheme = twConfig.theme.extend

const theme = {
  breakpoints: mapValues(twCustomTheme.screen, px => `(min-width: ${px})`),
}

export default theme
