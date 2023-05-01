import { Button, ViewBtn } from "../Button";

export function Li(){
    return (
        <>
        <li className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-[280px] pl-[24px] pr-[70px] pt-[62px] pb-6 rounded-xl mb-6">
        <h1 className="text-white  text-[20px]  tracking-wider">Frontend Mentor</h1>
        <p className="text-[15px] text-gray-400 tracking-wider">Feedback Board</p>
      </li>
      <li className="bg-[#FFF] max-w-[280px] pl-[24px] pr-[50px] pt-6 pb-6 rounded-xl mb-6">
        <Button/>
      </li>
      <li className="bg-[#FFF] max-w-[280px] pl-[24px] pr-[50px] pt-6 pb-6 rounded-xl mb-6">
        <div className="flex justify-between mb-6">
          <p className="text-[#3A4374] text-[18px]">Roadmap</p>
          <ViewBtn/>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-[#647196] text-[16px]" >Planned</p>
          <p className="text-[#647196]">2</p>
        </div>
        <div className="flex justify-between mb-2">
        <p className="text-[#647196] text-[16px]" >In-Progress</p>
          <p className="text-[#647196]">3</p>
        </div>
        <div className="flex justify-between mb-2">
        <p className="text-[#647196] text-[16px]" >Live</p>
          <p className="text-[#647196]">1</p>
        </div>
        
      </li>
      </>
    )
}

// export function HeaderItem(){
//     return(
        
//     )
// }