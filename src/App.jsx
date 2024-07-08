import CelebrityList from './CelebrityList/CelebrityList'
import CelebrityProvider from './Context/CelebrityProvider'

function App() {
  return (
    <CelebrityProvider>
      <CelebrityList />
    </CelebrityProvider>
  )
}

export default App
