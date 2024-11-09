import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="text-2xl border-[#1E3A8A] border-4 p-2 text-[#1E3A8A] rounded">
      <Link to="/">
        <span className="font-bold">CB</span>
        <span className="md:inline hidden"> | Clever</span>
        <span className="md:inline hidden font-bold">BLOGS</span>
      </Link>
    </div >
  )
}

export default Logo
