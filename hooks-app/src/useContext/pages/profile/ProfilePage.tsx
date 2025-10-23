import { Button } from "@/components/ui/button"
import { UserContext } from "@/useContext/context/UserContext"
import { use } from "react"
import { useNavigate } from "react-router";

export const ProfilePage = () => {
  const {user, logout } = use(UserContext);

  const navigation = useNavigate();

  const handleLogout = ()=>{
    logout;
    navigation('/useContext/')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>
        User profile
      </h1>
      <hr />
      <pre className="my-4 w-[80%]">
        {JSON.stringify(user, null, 2)}
      </pre>
      <Button variant="destructive"  onClick={handleLogout} >
        Back to useContext
      </Button>
    </div>
  )
}
