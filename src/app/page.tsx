import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/icon.svg"
          alt="Niksleri logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-extrabold">ნიქსლერი / Relocify</h1>
        <p className="text-sm/6 text-center font-[family-name:var(--font-geist-mono)] max-w-3xl">
          Niksleri LLC operating under the brand "Relocify" is a Georgian software developer. We design, ship and maintain the engine behind the remote-rental marketplace, Relocify.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.relocify.nl/"
            rel="noopener noreferrer"
          >
            Relocify Netherlands →
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col items-center text-center text-xs text-gray-500 dark:text-gray-400">
        <div className="space-y-1">
          <div>@ Niksleri LLC</div>
          <div>S. Zakariadze I Lane N21, Zestaponi, 2000, Georgia</div>
          <div>CoC ID: 430034081</div>
        </div>
      </footer>
    </div>
  );
}
