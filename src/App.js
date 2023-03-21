
import './App.css';
import EmployeesList from './component/EmployeesList';
import Input from './component/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className=" max-w-6xl mx-auto  flex flex-col items-center gap-5 mt-10 ">
      <Input/>
      <EmployeesList/>
      </div>
      
      
    </div>
  );
}

export default App;
