export default function Kurslar() {
  const kurslar = [
    { id: 1, nomi: "AI Asoslari", narxi: "100000" },
    { id: 2, nomi: "Python Dasturlash", narxi: "120000" },
  ];

  return (
    <div>
      <h2>Kurslar ro'yxati</h2>
      <ul>
        {kurslar.map((kurs) => (
          <li key={kurs.id}>
            {kurs.nomi} — {kurs.narxi} so'm
            <button onClick={() => alert(`To'lov: ${kurs.narxi}`)}>
              Sotib olish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
