"use client";

// -> PADRAOOOO

// import { useState } from "react";

// const Page = () => {

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">

//     </div>
//   );
// };

// export default Page;

// const Page = () => {

//   function handleCLick() {
//     alert("Funcionou")
//   }

//   return (
//     <div className="w-screen h-screen flex justify-center items-center">
//       <button onClick={()=> alert('Funciounou tambem! 2')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui!</button>
//     </div>
//   )
// }

// export default Page

// const Page = () => {

//   return (
//     <div className="w-screen h-screen flex justify-center items-center">
//       <button onClick={()=> alert('Funciounou tambem! 2')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui!</button>
//     </div>
//   )
// }

// export default Page

// import { CustomButtom } from "@/components/CustomButtom";

// const Page = () => {
//   const handleButton1 = () => alert("Clicou no botao 1");
//   const handleButton2 = () => alert("Clicou no botao 2");
//   const handleButton3 = () => alert("Clicou no botao 3");

//   return (
//     <div className="w-screen h-screen flex justify-center items-center">
//       <CustomButtom label="Clique aqui 1" onClicar={handleButton1} />
//       <CustomButtom label="Clique aqui 2" onClicar={handleButton2} />
//       <CustomButtom label="Clique aqui 3" onClicar={handleButton3} />
//     </div>
//   );
// };

// export default Page;

// import { FormEvent } from "react";

// const Page = () => {

//     const handFormSubmit = (event: FormEvent) => {
//       event.preventDefault()
//       alert('OPAAA! Mandando...')
//     }

//     return (
//       <div className="w-screen h-screen flex flex-col justify-center items-center">
//         <h1 className="text-5xl m-3">Formulario de login</h1>
//         <form onSubmit={handFormSubmit}>
//             <input className="bg-white text-black" type="text" />
//             <input type="submit" value="Enviar" className="cursor-pointer" />
//         </form>
//       </div>
//     );
//   };

//   export default Page;

// import { useState } from "react";

// const Page = () => {
//   const [count, setCount] = useState(0);

//   const handleClickButton = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <p>{count}</p>
//       <button
//         onClick={handleClickButton}
//         className="bg-blue-500 p-3 cursor-pointer"
//       >
//         + 1
//       </button>
//     </div>
//   );
// };

// export default Page;

// import { useState } from "react";

// const Page = () => {
//   const [showSecret, setShowSecret] = useState(false);

//   const handleClickButton = () => {
//     setShowSecret(!showSecret);
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <button onClick={handleClickButton} className="bg-blue-500 p-3 cursor-pointer">{showSecret ? 'Ocutar' : 'Mostrar'}</button>
//       {showSecret &&
//         <div className="bg-blue-300 p-3 rounded-md mt-3">Area Secreta</div>
//       }
//     </div>
//   );
// };

// export default Page;

// import { useState } from "react";

// const Page = () => {
//   const [nameInput, setNameInput] = useState("");

//   const handleBtnClick = () => {
//     alert(nameInput)
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <input
//         type="text"
//         className="bg-white border border-black p-3 text-xl text-black rounded-md"
//         placeholder="Digite seu nome:"
//           value={nameInput}
//         onChange={e => setNameInput(e.target.value)}
//       />
//       <p>Seu nome é: {nameInput}</p>
//       <button onClick={handleBtnClick}>Mostrar valor do campo</button>
//     </div>
//   );
// };

// export default Page;

// import { useState } from "react";

// const Page = () => {
//   const [count, setCount] = useState(0);

//   const handleBtnClick = () => { // pegar o valor atualizado da FILA
//     setCount(count + 2);
//     alert(c => c + 2)
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <p>{count}</p>
//       <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+2
//       </button>
//     </div>
//   );
// };

// export default Page;

// import { useState } from "react";
// import { Person } from "@/types/Person";

// const Page = () => {
//   const [fullname, setFullName] = useState<Person>({
//     name: "",
//     lastname: "",
//   });

//   const handleClearButton = () => {
//     setFullName({ name: "", lastname : "" });
//   }

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <input
//         type="text"
//         placeholder="Nome"
//         className="border bg-white border-black p-3 text-2xl text-black rounded-md mb-3"
//         //value={fullname.name}
//         onChange={(e) => setFullName({ ...fullname, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Sobrenome"
//         className="border bg-white border-black p-3 text-2xl text-black rounded-md mb-3"
//         //value={fullname.lastname}
//         onChange={(e) => setFullName({ ...fullname, lastname: e.target.value })}
//       />

//       <p>Meu nome é:</p>
//       <p>
//         {fullname.name} {fullname.lastname}
//       </p>
//       <button onClick={handleClearButton} className="p-3 bg-red-600 text-white rounded-xl hover:bg-red-500">Limpar tudo</button>
//     </div>
//   );
// };

// export default Page;

import { useState } from "react";
import { TodoItem } from "@/types/Todoitem";

const Page = () => {

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index));
  }

  const handleAddButton = () => {
    if (itemInput.trim()=== '') return;
    setList([...list, { label: itemInput, checked: false }]);
    setItemInput("");
  }

  const [itemInput, setItemInput] = useState("");

  const [list, setList] = useState<TodoItem[]>([
    { label: "Fazer dever de casa", checked: false },
    { label: "Comprar bolo", checked: false },
  ]);

  return (
    <div className="w-screen h-screen flex flex-col items-center text-3xl">
      <h1>Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-b border-gray-600">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          className="flex-1 border border-black p-3 text-2xl text-black bg-white rounded mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adcionar</button>
      </div>

      <p className="my-4">{list.length} Itens na Lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index} className="my-2">
            {item.label} -{" "}
            <button 
            onClick={()=> deleteItem(index)}
            className="hover:underline">[ deletar ]</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
