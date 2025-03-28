// import { peopleList } from "@/data/peopleList";
// const Page = () => {

//   const chemists = peopleList.filter(person => person.profession == 'chemist');

//   return (
//     <div>
//       <h1 className="font-bold text-2xl">Olá Mundo</h1>
//       <h3>Algum outro texto</h3>

//       {chemists.length > 0 &&
//         <>
//           <h3>Lista de Quimicos:</h3>
//           <ul>
//             {chemists.map(person =>
//               <li key={person.id}>{person.name}</li>
//             )}
//           </ul>
//         </>
//       }

//       {peopleList.length > 0 && (
//         <ul>
//           {peopleList.map((person) => (
//             <li key={person.id}>
//               {person.name} - {person.profession}
//             </li>
//           ))}
//         </ul>
//       )} *
//     </div>
//   );
// };

// export default Page;

// import { Card } from "@/components/card";
// import { Person } from "@/components/Person";

// const Page = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-2xl"> Ola mundo!</h1>
//       <h3>oi pessoa!</h3>

//       /* <Card
//         phrase='Alguma frase top!'
//         author='Coach FODA'
//       />

//       /* <Person
//         name="Elon Musk"
//         avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/270px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
//         roles={["CEO da Tesla", "CEO da SpaceX"]}
//       />

//       <Person
//         name="Jeff Bezos"
//         avatar="https://pyxis.nymag.com/v1/imgs/a5c/2a3/af4207347caba267b32ce2e9e8279cbf26-bezos-wapo.rhorizontal.w700.jpg"
//         roles={["CEO da Amazon", "CEO da Blue Origin"]}
//       />
//       <Person name="Joao" roles={["Algo", "Dono de algo"]} />

//     </div>
//   );
// };

// export default Page;

// import { Hours } from "@/components/hours";

// const Page = () => {
//   return (
//     <main className="w-screen h-screen bg-gradient-to-r flex items-center justify-center from-sky-400 to-indigo-600">
//       <Hours />
//     </main>
//   );
// }

// export default Page;
// import { Rating } from "@/components/rating";

//   const  Page = () => (
//     <div className="w-screen h-screen flex justify-center items-center text-white" >
//       <Rating rating={5}/>
//     </div>
//   )

// export default Page;

import { StudentsTable } from "@/components/StudentsTable";
import { students } from "@/data/students"; 

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl">Lista de estudantes:</h1>
      <StudentsTable students={students} />
    </div>
  )
};

export default Page;
