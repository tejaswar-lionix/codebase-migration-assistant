import React, {useState} from 'react';
export const CliView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CLI - CLI - migrate command, watch, config</h2><p>migrate</p></div>
};
export default CliView;
