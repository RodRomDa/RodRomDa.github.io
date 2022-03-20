import logo from './img/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="menu">
          <li className="item active"><a href="#">Тематики</a></li>
          <li className="item"><a href="#">Пользователи</a></li>
          <li className="item"><a href="#">Мой профиль</a></li>
        </ul>
        <img src={logo} className="logo" alt="logo" />
      </header>

      <main>
        <h1>Заголовок 1</h1>
        <h2>Заголовок 2</h2>
        <h3>Заголовок 3</h3>
        <p>Длительное время наш офис не мог похвастаться достойными условиями труда для наших сотрудников. Но настал период, когда нам нужно обновится. Мы ждём ваших идей и предложений по улучшению условий работы в офисе для достижения высокой производительности.</p>
      </main>

      <footer>
        <div className="logo-area">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="description-area">
          <h2>О проекте</h2>
          <p>Данный сервис предоставляет возможность эффективного взаимодействия между сотрудниками и руководителями компании в сфере обмена идеями и предложениями.</p>
          <p>Если вы владелец кампании и желаете с лёгкостью получить, лучшие идеи ваших сотрудников, то NekIdea - это то, что вы ищете.</p>
          <p>Достаточно лишь зарегистрировать свою кампанию на нашем сервисе и добавить сотрудников, и перед вами откроются широкие возможности поиска единого решения.</p>
        </div>
        <div className="contacts-area">
          <h2>Наши контакты</h2>
          <ul className="links">
            <li><a className="link"><i class="fas fa-at"></i>rodrom.da@mail.ru</a></li>
            <li><a className="link"><i class="fa-brands fa-github"></i>github.com/RodRomDa</a></li>
            <li><a className="link">@RodionDavidenko</a></li>
          </ul>
        </div>
      </footer>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
