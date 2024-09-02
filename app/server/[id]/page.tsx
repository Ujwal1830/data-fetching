import BackButton from "@/app/controller/BackButton";
import { UserI } from "@/utils/UserI"
async function getUserInfoById(userId: number) {
  "use server"
    const data = await fetch(`https://dummyjson.com/users/${userId}`);
    const res = await data.json();
    return res;
}

export default async function UserInfoPage(
    { params }: { params: { id: number } }
) {

    const userInfo: UserI = await getUserInfoById(params.id);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 gap-4">
    {userInfo ? (
      <div className="bg-lime-200 shadow-lg rounded-lg p-6 max-w-lg w-full border border-lime-300">
        <BackButton />
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-lime-800">{userInfo.firstName} {userInfo.lastName}</h2>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Gender:</strong> {userInfo.gender}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Email:</strong> {userInfo.email}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Phone:</strong> {userInfo.phone}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Age:</strong> {userInfo.age}</p>
        <p className="text-xl md:text-2xl text-lime-800"><strong>Birth Date:</strong> {new Date(userInfo.birthDate).toLocaleDateString()}</p>
      </div>
    ) : (
      <p>Loading user information...</p>
    )}
  </div>
  )
}
