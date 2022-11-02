import { Typography, Divider } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography;

function App() {
  return (
    <div className='App'>
      <Title className='heading'>TODO APP</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;