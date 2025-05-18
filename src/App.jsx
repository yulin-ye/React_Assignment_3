import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import { fetchData } from './utils/api';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData([...result]);
    };
    loadData();
  }, []);
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <div>
      {data?.map((item, index) => (
        <CourseCard key={`${new Date()}-${index}`} data={item} difficulty={difficulties[index]}/>
      ))}
    </div>
  );
}

export default App;