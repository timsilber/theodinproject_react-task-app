
import Overview from './components/Overview.js';

let tasks = ['task 1', 'task 2', 'task 3', 'task 4']

function App() {
  return (
    <div className="App">
      <Overview tasks = {tasks}/>
    </div>
  );
}

export default App;
