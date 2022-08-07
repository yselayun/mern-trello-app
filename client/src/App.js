import logo from './assets/images/design.png';
import './App.scss';

function App() {
  return (
    <div className="trello-master">
      <nav className="nav-bar app">App Bar</nav>
      <nav className="nav-bar board">App board</nav>
      <div className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
            <li>Second</li>
            <li>Second</li>
            <li>Second</li>
          </ul>
          <footer>Add New </footer>
        </div> 

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>Add New </footer>
        </div> 

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>
            Add another card
          </footer>
        </div> 

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>
            Add another card
          </footer>
        </div> 

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>
            Add another card
          </footer>
        </div> 

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>
            Add another card
          </footer>
        </div> 

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src={logo} alt="" />
              Design & Research
            </li>
            <li>First</li>
            <li>Second</li>
          </ul>
          <footer>
            Add another card
          </footer>
        </div> 
      </div>
    </div>
  );
}

export default App;
