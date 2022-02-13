import './App.scss';
import LOGO from './img/react.png';
import { Routes, Route, Link } from 'react-router-dom';
// import { useGetAnyDataQuery } from './store/services/storeApiCalls';
import { motion } from 'framer-motion';
import Cards from './pages/Cards';
import Buttons from './pages/Buttons';
import Navigation from './components/Navigation';

const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  // const { data, error, isLoading, isError } = useGetAnyDataQuery(undefined);
  const app = 'app';

  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      onClick={() => console.log('!')}
      className="App"
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </motion.div>
  );
};

export default App;
