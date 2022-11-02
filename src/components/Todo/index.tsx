import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

type TodoProps = {
    name: string,
    priority: string
    status?: boolean
}

export default function Todo({ name, priority, status=false }: TodoProps) {
  const [checked, setChecked] = useState(status);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  let color = priorityColorMapping.Medium;
  switch(priority) {
    case 'High': color = priorityColorMapping.High;break;
    case 'Low': color = priorityColorMapping.Low;break;
    default: break;
  }
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 8,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={color} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}