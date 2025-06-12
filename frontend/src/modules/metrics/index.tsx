import React, {useState} from 'react';
export const MetricsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>METRICS - Metrics - coverage, equivalence score, L</h2><p>coverage</p></div>
};
export default MetricsView;
