import 'tailwindcss/tailwind.css'
import '@styles/global.css'
import '@splidejs/splide/dist/css/splide.min.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'rc-drawer/assets/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
