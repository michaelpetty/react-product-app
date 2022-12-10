import { Container } from 'semantic-ui-react';
import Header from './components/Header'
import TheRoutes from './config/routes'

function App() {
  return (
    <div>
      <Header />
      <Container>
        {TheRoutes }
      </Container>
    </div>
  );
}

export default App;
