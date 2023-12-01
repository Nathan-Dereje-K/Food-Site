import React from "react";

const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">Hot Classic</p>
            <p className="px-3">Through 8/26</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">Grab our lattest</p>
            <p className="px-3">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">Crunchi Pie</p>
            <p className="px-3">Weekends</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">Crunchi Pie</p>
            <p className="px-3">Weekends</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">Crunchi Pie</p>
            <p className="px-3">Weekends</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">Crunchi Pie</p>
            <p className="px-3">Weekends</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  );
};

export default HeadlineCard;
