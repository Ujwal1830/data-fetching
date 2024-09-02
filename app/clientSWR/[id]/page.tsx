'use client'

import BackButton from "@/app/controller/BackButton";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args: [RequestInfo | URL, RequestInit?]): Promise<any> => fetch(...args).then(res => res.json()
);

export default function UserInfoPage(
    { params }: { params: { id: number } }
) {
    const { data, error } = useSWR(`https://dummyjson.com/users/${params.id}`, fetcher)

    const router = useRouter();
    if( error ) {
        return <div>Error while fetching the data....</div>
    }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 gap-4">
    <div className="bg-lime-200 shadow-lg rounded-lg p-6 max-w-lg w-full border border-lime-300">
        <BackButton />
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-lime-800">{data.firstName} {data.lastName}</h2>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Gender:</strong> {data.gender}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Email:</strong> {data.email}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Phone:</strong> {data.phone}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Age:</strong> {data.age}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Birth Date:</strong> {new Date(data.birthDate).toLocaleDateString()}</p>
      </div>
  </div>
  )
}
