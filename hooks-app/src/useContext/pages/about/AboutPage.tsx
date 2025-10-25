import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

  const { logout, isAuthenticated } = use(UserContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Website about me</h1>
      <div className="flex flex-col gap-2">
        {
          isAuthenticated && (

            <Link to="/useContext/profile">Profile</Link>
          )
        }
        {isAuthenticated ? (
          <Button variant="destructive" className="mt-4" onClick={logout}>
            Exit
          </Button>
        ) : (

          <Link to="/useContext/login">Login in</Link>
        )
        }
      </div>


    </div>
  )
}
