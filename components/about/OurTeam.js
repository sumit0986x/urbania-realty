// 'use client';

// export default function OurTeam() {
//     return (
//         <section className="bg-[#fff3db]">
//             <div className="container mx-auto py-10">
//                 <h2 className="text-center">Team Urbania</h2>
//                 <p>Multi-faceted, experienced and motivated. A team that is
//                     re-looking the traditional tenets of development for better living.</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     <div className="bg-[#96722C] text-white text-center rounded-sm p-10">
//                         <h5 className="text-white">Mr. Akshay Thakker</h5>
//                         <p>Founding Partner Of Urbania</p>
//                         <button className="p-3">Read More</button>
//                         <hr className="w-full border-[#FFFFFF80] py-2" />
//                         <hr className="w-6/12 border-[#FFFFFF80] py-2 mx-auto" />
//                     </div>

//                     <div className="bg-[#96722C] text-white text-center rounded-sm p-10">
//                         <h5 className="text-white">Mr. Akshay Thakker</h5>
//                         <p>Founding Partner Of Urbania</p>
//                         <button className="p-3">Read More</button>
//                         <hr className="w-full border-[#FFFFFF80] py-2" />
//                         <hr className="w-6/12 border-[#FFFFFF80] py-2 mx-auto" />
//                     </div>

//                     <div className="bg-[#96722C] text-white text-center rounded-sm p-10">
//                         <h5 className="text-white">Mr. Akshay Thakker</h5>
//                         <p>Founding Partner Of Urbania</p>
//                         <button className="p-3">Read More</button>
//                         <hr className="w-full border-[#FFFFFF80] py-2" />
//                         <hr className="w-6/12 border-[#FFFFFF80] py-2 mx-auto" />
//                     </div>

//                     <div className="bg-[#96722C] text-white text-center rounded-sm p-10">
//                         <h5 className="text-white">Mr. Akshay Thakker</h5>
//                         <p>Founding Partner Of Urbania</p>
//                         <button className="p-3">Read More</button>
//                         <hr className="w-full border-[#FFFFFF80] py-2" />
//                         <hr className="w-6/12 border-[#FFFFFF80] py-2 mx-auto" />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }


'use client';

import Image from 'next/image';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Mr. Akshay Thakker',
    title: 'Founding Partner Of Urbania',
    description: 'Akshay is one of the founding partners and brings over 20 years of experience in real estate development and design innovation.'
  },
  {
    name: 'Jane Doe',
    title: 'Chief Architect',
    description: 'Jane leads the architectural division with a passion for sustainable and human-centric design.'
  },
  {
    name: 'John Smith',
    title: 'Head of Development',
    description: 'John oversees all development projects with a focus on timely delivery and quality.'
  },
  {
    name: 'Sara Khan',
    title: 'Marketing Director',
    description: 'Sara is responsible for Urbania’s marketing strategies and customer engagement.'
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="bg-[#fff3db]">
      <div className="container mx-auto py-16">
        <h2 className="text-center text-3xl font-semibold mb-4">Team Urbania</h2>
        <p className="text-center max-w-2xl mx-auto mb-10">
          Multi-faceted, experienced and motivated. A team that is re-looking the traditional tenets of development for better living.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="cursor-pointer bg-[#96722C] text-white text-center rounded-sm p-10 transition duration-300 hover:bg-[#b98b3c]"
            >
              <h5 className="text-white">{member.name}</h5>
              <p className="">{member.title}</p>
              <button className="p-3 transition">Read More</button>
              <hr className="w-full border-[#FFFFFF80] py-2" />
              <hr className="w-6/12 border-[#FFFFFF80] py-2 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black  bg-opacity-70 flex justify-center items-center z-[2000] px-4">
          <div className="bg-white rounded-sm max-w-md w-full  relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
             <Image src="/icon/cancel.svg" alt='Close Icon' width={15} height={15} className=''/>
            </button>
            <div className='bg-[#96722C] rounded-t-sm  p-6 text-white'>
            <h5 className="text-white">{selectedMember.name}</h5>
            <p >{selectedMember.title}</p>
            </div>
            <div className='p-6'>
            <p className="text-gray-600">{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
