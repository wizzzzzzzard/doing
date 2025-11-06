use client;
import { useState, useEffect } from 'react';

export default function DoingList() {
  const [doings, setDoings] = useState([]);

  useEffect(() => {
    const fetchDoings = async () => {
      const response = await fetch('/api/doings');
      const data = await response.json();
      setDoings(data);
    };
    fetchDoings();
  }, []);

  return (
    <ul>
      {doings.map((doing) => (
        <li key={doing.id} className="mb-2">
          {doing.text}
        </li>
      ))}
    </ul>
  );
}