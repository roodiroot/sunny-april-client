import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import RouterApp from './components/RouterApp';
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <BrowserRouter>
      <Header />
      <RouterApp />
      <Footer />
    </BrowserRouter>
  );
})

export default App;
