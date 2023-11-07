import RouterPages from "./Router/RouterPages"
import Navbar from "./components/Navbar"


const App = () => {
const isUserSignIn=!!localStorage.getItem('token')
  return (
    <>
      <Navbar sigIn={isUserSignIn}/>



    <RouterPages sigIn={isUserSignIn} />
    </>
  )
}

export default App