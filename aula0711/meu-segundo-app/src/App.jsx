import './App.css';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='content'>
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default App