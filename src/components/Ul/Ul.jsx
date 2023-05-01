import { Li } from "../Li";

export function Ul(){
    return(
    <div className="flex justify-around align-center ">
    <ul>
        <Li/>
    </ul>
    <ul >
      <li className="bg-[#373F68] px-6 py-[14px] flex items-center justify-between gap-28 rounded-xl mb-6">
        <div className="flex items-center gap-8">
          <img src="" alt="" />
          <p className="text-white text-[18px]">6 Suggestions</p>
          <p className="text-[#F2F4FE]">Sort by : </p>
          
          <select name="" className="group" id="">
            <option value="Most Upvotes" className=" text-[] group-hover:text-[#AD1FEA]">Most Upvotes</option>
            <option value="Least Upvotes" className="text-[18px] group-hover:text-[#AD1FEA]">Least Upvotes</option>
            <option value="Most Comments" className="text-[18px] group-hover:text-[#AD1FEA]">Most Comments</option>
            <option value="Least Comments" className="text-[18px] group-hover:text-[#AD1FEA]" >Least Comments</option>
          </select>
        </div>
          <button className="text-[14px] px-6 py-[13px] rounded-xl bg-[#C75AF6] text-white">+ Add Feedback</button>

      </li>
      <li className="flex items-center justify-between rounded-xl bg-white px-8 py-7 mb-6">
        <div className=" bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6]  rounded-xl w-[40px] h-[53px] px-1 flex flex-col items-center py-1">
        <i className="fa-solid fa-arrow-up mx-auto"></i>
          <p className="">112</p>
        </div>
        <div className="max-w-[476px]">
          <h2 className="text-[#3A4374] mb-2">Add tags for solutions</h2>
          <p className="mb-3 text-[#647196]">Easier to search for solutions based on a specific stack.</p>
          <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] text-[#4661E6] leading-loose  rounded-xl px-4 px-1 flex flex-col items-center py-1">Enhancement</button>
        </div>
        <div className="flex items-center gap-3">
        <i class="fa-regular fa-comment text-[#CDD2EE]"></i>
          <p className="text-[#3A4374] text-[16px]">2</p>
        </div>
      </li>

      <li className="flex items-center justify-between rounded-xl bg-white px-8 py-7 mb-6">
        <div className=" bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6]  rounded-xl w-[40px] h-[53px] px-1  flex flex-col items-center py-1">
        <i className="fa-solid fa-arrow-up  "></i>
          <p className="">99</p>
        </div>
        <div className="max-w-[476px]">
          <h2 className="text-[#3A4374] mb-2">Add a dark theme option</h2>
          <p className="mb-3 text-[#647196]">It would help people with light sensitivities and who prefer dark mode.</p>
          <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] text-[#4661E6] leading-loose  rounded-xl px-4 py-[6px]">Feature</button>
        </div>
        <div className="flex items-center gap-3">
        <i class="fa-regular fa-comment text-[#CDD2EE]"></i>
          <p className="text-[#3A4374] text-[16px]">4</p>
        </div>
      </li>

      <li className="flex items-center justify-between rounded-xl bg-white px-8 py-7 mb-6">
        <div className=" bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6]  rounded-xl w-[40px] h-[53px] px-1 flex flex-col items-center py-1">
        <i className="fa-solid fa-arrow-up  "></i>
          <p className="">65</p>
        </div>
        <div className="max-w-[476px]">
          <h2 className="text-[#3A4374] mb-2">Q&A within the challenge hubs</h2>
          <p className="mb-3 text-[#647196]">Challenge-specific Q&A would make for easy reference.</p>
          <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] text-[#4661E6] leading-loose  rounded-xl px-4 py-[6px]">Feature</button>
        </div>
        <div className="flex items-center gap-3">
        <i class="fa-regular fa-comment text-[#CDD2EE]"></i>
          <p className="text-[#3A4374] text-[16px]">1</p>
        </div>
      </li>
      
      <li className="flex items-center justify-between rounded-xl bg-white px-8 py-7 mb-6">
        <div className=" bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6]  rounded-xl w-[40px] h-[53px] px-1 flex flex-col items-center py-1">
        <i className="fa-solid fa-arrow-up"></i>
          <p className="">51</p>
        </div>
        <div className="max-w-[476px]">
          <h2 className="text-[#3A4374] mb-2">Allow image/video upload to feedback</h2>
          <p className="mb-3 text-[#647196]">Images and screencasts can enhance comments on solutions.</p>
          <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] text-[#4661E6] leading-loose  rounded-xl px-4 py-[6px]">Enhancement</button>
        </div>
        <div className="flex items-center gap-3">
        <i class="fa-regular fa-comment text-[#CDD2EE]"></i>
          <p className="text-[#3A4374] text-[16px]">2</p>
        </div>
      </li>

      <li className="flex items-center justify-between rounded-xl bg-white px-8 py-7 mb-6">
        <div className=" bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6]  rounded-xl w-[40px] h-[53px] px-1 flex flex-col items-center py-1">
        <i className="fa-solid fa-arrow-up  "></i>
          <p className="">42</p>
        </div>
        <div className="max-w-[476px]">
          <h2 className="text-[#3A4374] mb-2">Ability to follow others</h2>
          <p className="mb-3 text-[#647196]">Stay updated on comments and solutions other people post.</p>
          <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] text-[#4661E6] leading-loose  rounded-xl px-4 py-[6px]">Feature</button>
        </div>
        <div className="flex items-center gap-3">
        <i class="fa-regular fa-comment text-[#CDD2EE]"></i>
          <p className="text-[#3A4374] text-[16px]">3</p>
        </div>
      </li>

      <li className="flex items-center justify-between rounded-xl bg-white px-8 py-7 ">
        <div className=" bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6]  rounded-xl w-[40px] h-[53px] px-1  flex flex-col items-center py-1">
        <i className="fa-solid fa-arrow-up  "></i>
          <p className="">3</p>
        </div>
        <div className="max-w-[476px]">
          <h2 className="text-[#3A4374] mb-2">Preview images not loading</h2>
          <p className="mb-3 text-[#647196]">Challenge preview images are missing when you apply a filter.</p>
          <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] active:bg-[#4661E6] text-[#4661E6] leading-loose  rounded-xl px-4 py-[6px]">Bug</button>
        </div>
        <div className="flex items-center gap-3">
        <i class="fa-regular fa-comment text-[#CDD2EE]"></i>
          <p className="text-[#3A4374] text-[16px]">0</p>
        </div>
      </li>
    </ul>
    </div>
    
    )
}