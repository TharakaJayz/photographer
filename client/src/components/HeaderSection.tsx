import React from "react";

interface Props {
  title: string;
  desc: string;
  imgUrl?: string;
  TextLogic: boolean;
}

const HeaderSection = (props: Props) => {
  return (
    <div className="w-full   flex flex-col justify-between">
      <img
        src={props.imgUrl || ""}
        alt="img"
        className="w-full h-vh80 object-cover object-center border-red-500 border-2"
      />
      {props.TextLogic && (
        // <div className="flex flex-col h-vh20 justify-start pt-vh2 text-center gap-vh2">
        //   <h2 className="font-bold text-2xl">{props.title}</h2>
        //   <p>{props.desc}</p>
        // </div>

        <section className="w-full flex flex-col gap-vh5 xl2_:gap-vh3 items-center">
          <h1 className="font-bold text-3xl text-center  capitalize text-service_svg_bg">
          {props.title}
          </h1>
          <p className="w-p80  text-center xl2_:w-full ">
          {props.desc}
          </p>
        </section>
      )}
    </div>
  );
};

export default HeaderSection;
