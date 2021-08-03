import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle.style.js'
import Home from './components/Home'

const MainWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainWrapper>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/houseware'>
            집기!!!
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
