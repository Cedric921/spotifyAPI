import './App.css'
import Dropdown from './components/Dropdown'

function App() {
  const data = [
		{ value: 1, name: 'foo' },
		{ value: 2, name: 'bar' },
		{ value: 3, name: 'vb' },
	];

  return (
    <div className="App">
      <Dropdown options={data}/>
    </div>
  )
}

export default App
