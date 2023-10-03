import { 
  Flex
 } from '@chakra-ui/react'
import Home from './components/home'
import FirstPlace from './components/firstPlace'
import Schedule from './components/schedule'
import Pillars from './components/pillars'
import Footer from './components/footer'

export default function App() {

  return (
   <Flex flexDirection="column">
    <Home />
    <FirstPlace />
    <Schedule />
    <Pillars />
    <Footer />
   </Flex>
  )
}
