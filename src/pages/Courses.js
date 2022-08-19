import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "http://127.0.0.1:8000/people/"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setBook(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return 'Loading...';
  if (error) return 'Error...';

  return (
  <div>
    {
    book.result.map((item, index) =>(
    <div key={index}>{item.name}</div>
    
    )
    )
}
  </div>
  );
};

export default Courses;