import './App.css';

import { Route, Routes } from 'react-router-dom'

// Routes
import Navigation from './routes/navigation/navigation.route';
import OneServer from './routes/one-server/one-server.route';

function App() {
  return (
    <Routes>
      <Route path='/lineas-de-espera' element={<Navigation />}>
        <Route index element={<OneServer />} />
        <Route path='un-servidor' element={<OneServer />} />
      </Route>
    </Routes>
  );
}

export default App;
