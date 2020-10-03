import '../styles/globals.scss'
import Particles from 'react-particles-js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Particles style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 0 }} width={'100%'} height={'100%'} params={{
        particles: {
          color: "#3e3e3e",
          number: { value: 100 },
          lineLinked: { color: '#3e3e3e' }
        },
      }} />
    </>)
}

export default MyApp
