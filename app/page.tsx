
export default function Home() {

  const habits ={
    'beber água': {
      '2024-11-03': true,
      '2024-11-04': false,
      '2024-11-05': false,
    }
  };

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 && (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Você não tem hábitos cadastrados
        </h1>
      )}      
    </main>
  );
}
