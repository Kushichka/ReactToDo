import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Done from './components/Pages/Done/Done';
import Tasks from './components/Pages/Tasks/Tasks';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tasks />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/done' element={<Done />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
