import { Col, Row, Input, Typography} from 'antd';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';

export default function Filters() {
  const [searchValue, setSearchValue] = useState('');
  const todoContext = useContext(TodoContext);
  useEffect(()=>{
    const timer = setTimeout(() => {
      todoContext?.setSearchText(searchValue);
    }, 500);
    //Cleanup function
    return ()=> clearTimeout(timer);
  }, [searchValue]);
  
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph className='title'>
          Search
        </Typography.Paragraph>
        <Input
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
          placeholder='input search text' />
      </Col>
    </Row>
  );
}