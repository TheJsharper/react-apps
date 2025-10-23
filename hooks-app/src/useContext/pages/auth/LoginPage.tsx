import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { UserContext } from "@/useContext/context/UserContext"
import { useContext, useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const { login, logout } = useContext(UserContext);

  const [userId, setUserId] = useState<number>(-1);

  const navogation = useNavigate();

  const handleSumit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ userId });

    const result = login(userId);

    if (!result) toast.error('user was not found !', {

    })

    navogation('/useContext/profile');

    console.log({ result });

  }
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <h1 className="text-4xl font-bold"> Login</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10" onSubmit={handleSumit} >
        <Input type="number" placeholder="User id"
          onChange={(e) => setUserId(+e.target.value)}
        />

        <Button type="submit" className="cursor-pointer">
          Login
        </Button>
      </form>

      <Link to="/useContext/about" >
        <Button variant="ghost" className={cn('cursor-pointer')} onClick={()=>logout()}  >

          Back to UseContext
        </Button>
      </Link>

    </div>
  )
}
