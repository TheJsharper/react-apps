import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
    getUser: Usable<User>;
}
export const ClientInformation = ({ getUser }: Props) => {


    const { id, location, name, role } = use(getUser)


    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-4xl font-thin text-white" > {name}</h1>
            <p className="text-white text-2xl">
                #{id}
            </p>
            <p className="text-white text-2xl">
                {location}
            </p>
            <p className="text-white text-2xl">
                {role}
            </p>

        </div>
    )

}