import Home from "./(home)";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between lg:flex">
        <Home />
      </div>
    </main>
  );
}
