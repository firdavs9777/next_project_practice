import Link from "next/link";

export default function Meals() {
  return (
    <main> Meals Application Menu
      <br/>
     <Link href='/meals/1' className='text-xl text-blue-500 inline-block mt-8'>
        First Meal
      </Link>


    </main>
  )
}