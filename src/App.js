import './App.css';


function Spisok() {
  return (
          <ul>
            <li>Гамлет</li>
            <li>Макбет</li>
            <li>Тит Андроник</li>
          </ul>  
  );
}

function App() {
  return (
    <div className="App">
      <div>Уи́льям Шекспи́р  — английский поэт и драматург, зачастую считается величайшим
         англоязычным писателем и одним из лучших драматургов мира. Часто именуется
          национальным поэтом Англии.</div>
         {Spisok()} 
          
    </div>
  );
}





export default App;
