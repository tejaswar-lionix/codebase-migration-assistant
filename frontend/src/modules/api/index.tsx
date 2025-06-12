import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for parse, transform, verify</h2><p>POST parse</p></div>
};
export default ApiView;
