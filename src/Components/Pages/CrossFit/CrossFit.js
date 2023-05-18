import React from "react";
import img1 from "../../../assets/Image/CrossFit/pic1.png";
import img2 from "../../../assets/Image/CrossFit/pic2.png";
import daif from "../../../assets/Image/Trainers/Daif1.jpeg";
import shahid from "../../../assets/Image/Trainers/shahid2.jpeg";
import Package from "../Package/Package";
import SharedNav from "../Shared/SharedNav";
import "./CrossFit.css";
import CrossFitTable from "./CrossFitTable";

const CrossFit = () => {
  return (
    <>
      <SharedNav />
      <div className="mid-container">
        <div className="grid md:grid-cols-2 gap-10  mt-16">
          <div className="flex items-center ">
            <div>
              <h1 className="text-3xl text-primary font-extrabold mb-5">
                WHAT IS CrossFit?
              </h1>
              <p className="font-bold lg:w-[90%] text-justify">
                CrossFit is a strength & conditioning program based on general
                physical preparedness (GPP). In the CrossFit method of training,
                real life movements like running, lifting, swimming, cycling,
                carrying loads to distance, climbing, pushing or pulling heavy
                objects etc. are programmed into effective and fun workouts
                designed by CrossFit trainers.{" "}
              </p>

              <button className="custom-btn btn-15 mt-5 p-3">see more</button>
            </div>
          </div>
          <div className="w-full">
            <img className="w-full" src={img1} alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 my-16">
          <div className="w-full md:order-1 order-2">
            <img className="w-full" src={img2} alt="" />
          </div>
          <div className="flex items-center md:order-2 order-1">
            <div>
              <h1 className="text-3xl text-primary font-extrabold mb-5">
                All sessions are coach led by a fully qualified CrossFit coach.
              </h1>
              <p className="font-bold lg:w-[90%] text-justify">
                We believe fitness should be accessible to everyone, everywhere,
                regardless of income or access to a gym. With hundreds of
                professional workouts, healthy recipes and informative articles,
                as well as one of the most positive communities on the web,
                you’ll have everything you need to reach your personal fitness
                goals – for free!
              </p>

              <button className="custom-btn btn-15 mt-5 p-3">see more</button>
            </div>
          </div>
        </div>
        <CrossFitTable />

        <div className="mb-16">
          <h1 className="md:text-4xl text-3xl font-bold text-primary mb-6">
            Our Coaches
          </h1>
          <div className="md:flex gap-10 items-center">
            <div className="lg:w-[35%] md:w-[45%] overflow-hidden rounded-xl">
              <img className="w-full" src={daif} alt="" />
            </div>
            <div className="lg:w-[65%] md:w-[55%]">
              <div>
                <h1 className="text-3xl text-primary font-extrabold mb-5 uppercase md:mt-0 mt-5">
                  Daif Salemoon{" "}
                </h1>
                <p className="text-justify">
                  Daif is a CrossFit Level-2 trainer. He's coaching CrossFit for
                  the last 5 years. Being a black belt in Karate, he's used to
                  living a disciplined life from an early age. Resultantly, his
                  coaching reflects the values of a balanced lifestyle. As a
                  personal trainer and nutritionist, he is proficient at
                  navigating clients journey through different stages of change.
                  It's not always about the training or nutrition that is
                  challenging, sometimes people struggle with progress due to
                  setbacks in other areas of their lives. Learning from and
                  overcoming his own challenges, Daif is a life coach who's
                  passionate about helping people overcome life hurdles, set
                  goals and follow their passion and purpose.
                </p>

                <button className="custom-btn btn-15 mt-5 p-3">see more</button>
              </div>
            </div>
          </div>
          <div className="md:flex items-center gap-10  mt-14">
            <div className="lg:w-[35%] md:w-[45%] overflow-hidden rounded-xl md:order-2 order-1">
              <img className="w-full" src={shahid} alt="" />
            </div>
            <div className="lg:w-[65%] md:w-[55%] md:order-1 order-2">
              <div>
                <h1 className="text-3xl text-primary font-extrabold mb-5 uppercase md:mt-0 mt-5">
                  Shahidur Rahman{" "}
                </h1>
                <p className="text-justify">
                  Shahid is a CrossFit level-1 trainer. He's passionate about
                  helping people be in control of their lives and he wants to do
                  that by making them move better in their day to day lives.
                  He's working as a coach for the last nine years. He's a
                  certified personal trainer who has a knack for corrective and
                  adaptive exercise and many of our clients with injuries and
                  other physical limitations are reaping the benefit of that.{" "}
                  <br />
                  <br />
                  These days, busy life leaves little room for exercise for many
                  of us. A short intensive class can solve that. Shahid here is
                  a HIIT certified coach who delivers short intense and fun
                  classes at CFA regularly. <br />
                  <br />
                  As it's not always about training and factors like nutrition,
                  sleep, stress and support system plays important roles in a
                  person's growth, Shahid is efficient at not just showing the
                  path but also leading the way every step of the journey.
                </p>

                <button className="custom-btn btn-15 mt-5 p-3">see more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-16 justify-center border-y-2 py-10">
          <a
            href="https://journal.crossfit.com"
            target="_blank"
            title="CrossFit Journal: The Performance-Based Lifestyle Resource"
          >
            <img
              src="https://de45qwmlmgefw.cloudfront.net/badges/black-300x150.png"
              width="200px"
              height="130"
              alt="CrossFit Journal: The Performance-Based Lifestyle Resource"
            />
          </a>
        </div>

        <h1 className="md:text-4xl text-3xl font-bold text-primary mb-6">
          Recommended <br /> Packages for you
        </h1>
        <Package />
      </div>
    </>
  );
};

export default CrossFit;
