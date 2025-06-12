import React, {useState} from 'react';
export const Php_parserView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PHP_PARSER - PHP parser - legacy PHP 5/7, AST, symbol</h2><p>php 5</p></div>
};
export default Php_parserView;
