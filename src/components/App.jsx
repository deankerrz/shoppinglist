import { Header } from './Header'
import { Footer } from './Footer'
import { ItemsList } from '../features/list/List.js'

function App() {
  return (
    <div className="App">
      <Header>shopping with friends :)</Header>
      <main>
        <ItemsList />
      </main>
      <Footer>made by dean 💖</Footer>
    </div>
  )
}

export default App
