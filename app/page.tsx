import DayState from "@/components/DayState";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const habits ={
    "beber água": {
      '2024-11-15': true,
      '2024-11-16': false,
      '2024-11-17': true,
    },

    "estudar programação": {
      '2024-11-15': false,
      '2024-11-16': true,
      '2024-11-17': true,
    },
  };

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1)); 

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || 
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            Você não tem hábitos cadastrados
          </h1>
      ))}
      {habits !== null && 
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                  {habit}
              </span>
              <button>
                <Image 
                  src="/trash.svg" 
                  width={20} 
                  height={20} 
                  alt="ícone de lixeira" 
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {sortedWeekDays.map((day) => (
                <div key={day} className="flex flex-col last:font-bold">
                  <span className="font-sans text-xs text-white text-center">
                    {day}
                  </span>
                  {/* day state */}
                  <DayState day={undefined}/>
                </div>
            ))}
            </section>
          </div>
        ))}

        <Link 
        href="novo-habito" 
        className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 
        text-neutral-900 bg-[#45edad] font-display font-regular text-2xl p-2
        rounded-md"
        >
          Novo hábito
        </Link>
    </main>
  );
}
