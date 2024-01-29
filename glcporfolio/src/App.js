import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import './Scroll.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1.',
      tecnologias: ['React', 'CSS'],
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del Proyecto 2.',
      tecnologias: ['Node.js', 'Express', 'MongoDB'],
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <header className="App-header">
        <h1>Mi Portafolio</h1>
      </header>
      <main>
        <section>
          <h2>Proyectos</h2>
          <ul>
            {proyectos.map((proyecto, index) => (
              <li key={index}>
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <p>Tecnologías: {proyecto.tecnologias.join(', ')}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2024 Mi Portafolio</p>
      </footer>
    </div>
  );
}

export default App;