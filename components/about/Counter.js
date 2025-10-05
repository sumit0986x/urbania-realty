'use client';
import CountUp from 'react-countup';
import Image from 'next/image';

export default function Counter() {
  return (
    <div className='w-full py-10 flex items-center '>
    <div className='w-4/12 h-px bg-[#96722C70] md:block hidden'/>
    
    <div className='container md:w-8/12 mx-auto'>
      <div className="grid grid-cols-1 xs:grid-cols-5 gap-6 items-center text-center w-full">
        {/* Stat 1 */}
        <div className="w-full">
          <div className="flex justify-center items-end ">
            <h2 className="text-6xl sm:text-[7.5vw] text-[#96722C]">
              <CountUp end={40} duration={10} className="text-6xl sm:text-[7.5vw]" />
            </h2>
            <h3 className=" text-2xl sm:text-4xl  text-[#96722C]">+</h3>
          </div>
          <h6 className="text-sm mt-3">Years of Experience</h6>
        </div>

        {/* Divider 1 */}
        <div className="flex flex-row xs:flex-col items-center justify-center">
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] mr-2 xs:mr-0 xs:mb-2" />
          <Image src="/icon/Isolation.svg" alt="" width={40} height={40} />
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] ml-2 xs:ml-0 xs:mt-2" />
        </div>

        {/* Stat 2 */}
        <div className="w-full">
          <div className="flex justify-center items-end">
            <h2 className="text-6xl sm:text-[7.5vw] text-[#96722C]">
              <CountUp end={25} duration={10} className="text-6xl sm:text-[7.5vw]" />
            </h2>

            <h3 className=" text-2xl sm:text-4xl  text-[#96722C]">+</h3>

          </div>
          <h6 className="text-sm mt-3">Societies Redeveloped</h6>
        </div>

        {/* Divider 2 */}
        <div className="flex flex-row xs:flex-col items-center justify-center">
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] mr-2 xs:mr-0 xs:mb-2" />
          <Image src="/icon/Isolation.svg" alt="" width={40} height={40} />
          <div className="w-10 h-px xs:w-px xs:h-10 bg-[#96722C70] ml-2 xs:ml-0 xs:mt-2" />
        </div>

        {/* Stat 3 */}
        <div className="w-full h-full">
          <div className="flex justify-center items-end ">
            <h2 className="text-6xl sm:text-[7.5vw] text-[#96722C]">
              <CountUp end={20} duration={10} className="text-6xl sm:text-[7.5vw]" />
            </h2>

            <h3 className=" text-2xl sm:text-4xl  text-[#96722C]">+</h3>
          </div>
          <h6 className="text-sm mt-3">Lakh Sq. Ft. Delivered</h6>
        </div>
      </div>
    </div>

     <div className='w-4/12 h-px bg-[#96722C70] md:block hidden'/>

    </div>
  )
}
