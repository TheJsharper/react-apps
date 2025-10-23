import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Website about me</h1>
        <div className="flex flex-col gap-2">
          <Link to="/useContext/profile">Profile</Link>
          <Link to="/useContext/login">Login in</Link>
        </div>


    </div>
  )
}
