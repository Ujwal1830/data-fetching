'use client'

import { UserI } from "@/utils/UserI";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function ClientUsersPage() {

  async function fetchUsers() {
    const data = await fetch("https://dummyjson.com/users");
    const res = await data.json();
    setUsers(res.users);
  }
    const [users, setUsers] = useState<UserI[]>([]);

    useEffect(() => {
      fetchUsers();
    }, [])

  if( !users ) {
      return <div>
              Loading.....
          </div>
  }
    

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-4" >
      <div className="bg-slate-400 px-4 py-2 rounded-xl " >
            <h2 className="text-3xl" >Users from Client Side</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-3 gap-y-1" >
        { users && users.map((user) => (
          <Link href={`/client/${user.id}`} key={user.id} className="flex items-center cursor-pointer gap-1">
            <div className="bg-slate-900 h-2 w-2 rounded-full"></div>
            <div className="px-4 py-2 bg-slate-300 rounded-xl">
              {user.firstName} &nbsp;
              {user.lastName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
