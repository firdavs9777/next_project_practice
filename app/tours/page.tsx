import Link from 'next/link';
import React from 'react'


 const url = 'https://www.course-api.com/react-tours-project'
 type Tour = { 
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(url);
  const data: Tour[] = await response.json()
  return data;
 }
async function ToursPage() {
  const data = await fetchTours()
  console.log(data)
  return (
    <div>
      <h1> Tours Page</h1> 
      {data.map((tour) => {
        return (
          <Link key={tour.id} href={}>
            <h2 key={tour.id}>{tour.name}</h2>
          </Link>
)
      })}
    </div>
  )
}

export default ToursPage
