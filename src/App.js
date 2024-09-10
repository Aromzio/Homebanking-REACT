import { Content, Encabezado, Footer } from './components/layout';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div>
      <Encabezado/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
