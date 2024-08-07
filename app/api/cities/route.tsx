export async function GET(request: any) {
  let cities = [
    {
      id: 1,
      name: "Dar",
    },
    {
      id: 2,
      name: "Dodoma",
    },
    {
      id: 3,
      name: "Mwanza",
    },
    {
      id: 4,
      name: "Arusha",
    },
    {
      id: 5,
      name: "Mbeya",
    },
  ];
  return new Response(JSON.stringify(cities));
}
