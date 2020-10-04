import '../styles/globals.scss'
import useBreakpoint from '../hooks/useBreakpoint'
import Particles from 'react-particles-js'
import { useMemo } from 'react'

function MyApp({ Component, pageProps }) {
  const bp = useBreakpoint()

  const particlesNumber = useMemo(() => {
    switch (bp) {
      case 'sm': return 50
      case 'md': return 75
      case 'lg': return 100
      default: return 25
    }
  }, [bp])
  return (
    <>
      <Component {...pageProps} />
      <Particles style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: -100 }} width={'100%'} height={'100%'} params={{
        particles: {
          color: "#3e3e3e",
          number: { value: particlesNumber },
          lineLinked: { color: '#3e3e3e' }
        },
      }} />
    </>)
}

export default MyApp
