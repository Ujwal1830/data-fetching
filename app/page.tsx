import NavigationPage from "./controller/Navigation";

export default async function Home() {

  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/Kolkata`, { 
      next: { revalidate: 10 }
    });
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="text-6xl">
        { new Date(data.datetime).toLocaleString() }
      </div>
      <NavigationPage />
    </main>
  );
}
