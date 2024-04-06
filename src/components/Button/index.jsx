// import Link from 'next/link';

// function Button({ text, path}) {
//   const nav = `/${path}`;
//   return (
//     <div className=' mt-8'>
//       <Link href= {nav} >
//         <button className="bg-orange-600 text-white px-4 py-2 hover:bg-blue-950 border border-none shadow-right shadow-bottom shadow-lg btn uppercase">
//           {text}
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default Button;

import { Link } from "lucide-react";
import React from "react";

function index({ text }) {
  const handleClick = () => {
    <Link href="/contact">{text}</Link>;
  };
  return (
    // <div>
    //   <button
    //     className=" bg-orange-600 text-white px-4 py-2 hover:bg-blue-950 border border-none shadow-right shadow-bottom shadow-lg btn"
    //     onClick={handleClick}
    //   >
    //    {text}
    //   </button>
    // </div>
    <div className="p-5">
      <button class="px-btn-theme bg-orange-600 px-4 py-2 shadow-[5px_5px_rgba(0,_98,_90,_0.4)]">Button</button>
    </div>
  );
}

export default index;

{
  /* <div class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"> */
}
