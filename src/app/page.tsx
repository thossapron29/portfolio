"use client";
import React, { useState } from "react";
import { Chip, Divider } from "@nextui-org/react";

export default function Page() {
  const [tagList] = useState([
    "Java",
    "ReactJs",
    "NextJs",
    "Angular",
    "Jasper Report",
    "Crystal Report",
    "PrimeReact",
    "PrimeNG",
  ]);
  return (
    <React.Fragment>
      <div className="container mx-auto py-3">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="introduce">
            <div className="my-name text-xl text-bold">THOSSAPRON SAISUD</div>
            <div className="position">Full Stack Developer</div>
          </div>
          <div className="content-scroll">
            <div className="experience">
              <div className="grid grid-cols-12 items-center gap-3">
                <div className="col-span-3">
                  <Chip color="warning" variant="shadow" className="tag">
                    2020 - Present
                  </Chip>
                </div>

                <div className="col-span-7">
                  <span onClick={()=> window.open('https://motiftech.com/home-3/','_blank')} className="name">Motif Technology PCL.</span>
                </div>
              </div>

              <div className="grid grid-cols-4 items-center justify-items-center gap-3">
                <Divider orientation="vertical" className="timeline-line" />

                <div className="col-span-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  accusantium excepturi nobis voluptatem quae tenetur ad
                  deserunt dolor, officia animi consequatur natus corporis
                  similique nemo provident eaque laudantium. Maxime, hic.
                  <div className="tag-skill">
                    {tagList.map((item: string) => {
                      return <Chip key={item}>{item}</Chip>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
