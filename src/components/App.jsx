import { Header } from './Header'
import { Footer } from './Footer'
import { ListItem } from './ListItem'
import { List } from './List'

function App() {
  return (
    <div className="App">
      <Header>shopping with friends :)</Header>
      <main>
        <List>
          <ListItem>Bacon</ListItem>
          <ListItem>Kale</ListItem>
          <ListItem>Quinoa</ListItem>
        </List>
      </main>
      <Footer>made with love by dean</Footer>
    </div>
  )
}

export default App
