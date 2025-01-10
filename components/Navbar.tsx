import Link from 'next/link'
import logo from '@/assets/logo.png'
function Navbar() {
  return (
    <header className="max-3xl mx-auto py-4 flex gap-x-4 border-b-2">
      <Link href='/'>Home</Link>
       <Link href='/counter'>Counter</Link>
      <Link href='/tours'>Tours</Link>
       <Link href='/actions'>Actions</Link>
    </header>
  )
}
export default Navbar;