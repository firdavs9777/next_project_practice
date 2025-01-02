import Image from 'next/image';
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
  return (
    <section>
      <div>
        <h1> Tours Page</h1>
        <div className='grid md:grid-cols-3 gap-10'>
          {data.map((tour) => {
            return (
              <Link key={tour.id} href={`/tours/${tour.id}`} className="hover:text-blue-100">
                <div className='relative h-48 mb-2'>
                  <Image src={tour.image} alt={tour.name} fill priority className='object-cover rounded' sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'/>)
                </div>
                <h2 key={tour.id}>{tour.name}</h2>
              </Link>
            )
          })}
        </div>
      </div>
    </section>

  )
}

export default ToursPage
