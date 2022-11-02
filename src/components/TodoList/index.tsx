import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import Todo from '../Todo';

export default function TodoList() {
  const todoContext = useContext(TodoContext);
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const resetState = () => {
    setName('');
    setPriority('Medium');
  }
  const handleAddTodo = () => {
    if(!name) return;
    todoContext?.setTodoList(prev => [...prev, {name, priority}]);
    resetState();
  }

  return (
    <Row style={{ flex:1 }}>
      <Col span={24} style={{ height: 'calc(100% - 20px)', overflowY: 'auto' }}>
        {
          todoContext?.todoList?.map((todo, index) => {
            if(todo.name.includes(todoContext.searchText))
            return (
              <Todo key={index} name={todo.name} priority={todo.priority} status={todo.status} />)
            })
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={(e)=>setName(e.target.value)} />
          <Select
            value={priority}
            optionLabelProp="label"
            onChange={(value )=>setPriority(value )}
            style={{minWidth:92}}
            >
              <Select.Option value='High' label='High'>
                <Tag color='red' style={{width:'100%'}}>High</Tag>
              </Select.Option>
              <Select.Option value='Medium' label='Medium'>
                <Tag color='blue' style={{width:'100%'}}>Medium</Tag>
              </Select.Option>
              <Select.Option value='Low' label='Low'>
                <Tag color='gray' style={{width:'100%'}}>Low</Tag>
              </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}