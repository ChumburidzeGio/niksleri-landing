import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Niksleri logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-extrabold">ნიქსლერი</h1>
        <p className="text-sm/6 text-center font-[family-name:var(--font-geist-mono)] max-w-3xl">
          Niksleri LLC is a Georgian software studio. We design, ship and maintain the engine behind the remote-rental marketplace, Relocify.
        </p>

        {/*<div className="flex gap-4 items-center flex-col sm:flex-row">*/}
        {/*  <a*/}
        {/*      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"*/}
        {/*    href="https://www.relocify.nl/"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Relocify →*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>
    </div>
  );
}
