import React, {useState} from 'react';
export const AstView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>AST - Unified AST - nodes, types, control flow</h2><p>nodes</p></div>
};
export default AstView;
