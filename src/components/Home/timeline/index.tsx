"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { asset } from "@/lib/asset";

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">
                We deliver <span className="text-primary">clear outcomes</span>
              </p>
              <h2 className="text-white sm:text-5xl text-3xl font-medium lg:w-80% mx-auto mb-20">
                One engagement model—from discovery to scale
              </h2>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src={asset("/images/timeline/img-timeline.png")}
                  alt="delivery process"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                />
              </div>
              <div className="absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h3 className="text-muted text-2xl mb-3">Discover</h3>
                  <p className="text-lg text-muted/60">
                    Map scope, risks, and the metrics that matter
                  </p>
                </div>
                <div className="bg-primary/15 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <Image
                    src={asset("/images/solution/solution-icon-1.svg")}
                    alt="Discover"
                    width={44}
                    height={44}
                    className="w-16 h-16 "
                  />
                </div>
              </div>
              <div className="absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-primary/15 backdrop-blur-xs p-6 h-fit rounded-full">
                  <Image
                    src={asset("/images/solution/solution-icon-2.svg")}
                    alt="Design"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-muted text-2xl mb-3">Design</h3>
                  <p className="text-lg text-muted/60">
                    Refine architecture, UX, and delivery plan
                  </p>
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h3 className="text-muted text-2xl mb-3">Build</h3>
                  <p className="text-lg text-muted/60">
                    Ship working systems your team can operate
                  </p>
                </div>
                <div className="bg-primary/15 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <Image
                    src={asset("/images/solution/solution-icon-3.svg")}
                    alt="Build"
                    width={44}
                    height={44}
                    className="w-16 h-16 "
                  />
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-primary/15 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <Image
                    src={asset("/images/solution/solution-icon-4.svg")}
                    alt="Scale"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-muted text-nowrap text-2xl mb-3">Scale</h3>
                  <p className="text-lg text-muted/60">
                    Operate live products with ongoing support
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden" ref={ref}>
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-primary/15 p-6 rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-2xl text-muted mb-2">{item.title}</h4>
                    <p className="text-muted/60 text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
