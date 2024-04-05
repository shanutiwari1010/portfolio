import Link from 'next/link';

function Button({ text, path}) {
  const nav = `/${path}`;
  return (
    <div className=' mt-8'>
      <Link href= {nav} >
        <button className="bg-orange-600 text-white px-4 py-2 hover:bg-blue-950 border border-none shadow-right shadow-bottom shadow-lg btn uppercase">
          {text}
        </button>
      </Link>
    </div>
  );
}

export default Button;






// import { Link } from "lucide-react";
// import React from "react";

// function index({text}) {
//   const handleClick = ()=>{
//     <Link href="/contact">{text}</Link>
//   }
//   return (
//     <div>
//       <button 
//         className=" bg-orange-600 text-white px-4 py-2 hover:bg-blue-950 border border-none shadow-right shadow-bottom shadow-lg btn"
//         onClick={handleClick}
//       >
//        {text}
//       </button>
//     </div>
//     // <div className="p-5">
//     //  <button class="border-r-8 border-b-8 border-black px-4 py-2 bg-orange-600 px-btn-theme ">Button</button>
//     // </div>
//   );
// }

// export default index;
