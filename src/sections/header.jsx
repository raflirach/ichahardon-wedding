import { vFadeInBottom, vFadeInLeft, vFadeInRight, vFadeInTop, vShowInRight } from "@/helpers/utils";
import { useTransition, animated } from "@react-spring/web";
import {
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import data from "@/data/wedding-data.json"

const slides = data.images;

export default function Header({ m }) {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });

  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    setTimeout(() => {
      const animation = animate(count, data.date.day, { duration: 2 });
      const animation2 = animate(count2, data.date.month, { duration: 3 });
      const animation3 = animate(count3, data.date.year, { duration: 4 });

      return [animation.stop, animation2.stop, animation3.stop];
    }, 4000);
  }, []);

  return (
    <div className="relative" id="home">
      {transitions((style, i) => (
        <animated.div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
            backgroundSize: "100% fit",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}
      <m.div className="relative z-10 h-screen grid place-items-center text-center font-alice backdrop-filter backdrop-brightness-[.90] text-primary antialiased">
        <div className="w-3/4 py-2 px-2 rounded-lg overflow-hidden">
          <m.div custom={10} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInBottom} className="text-2xl xs:text-xl">The Wedding Of</m.div>
        </div>
        <div className="relative flex justify-center items-center">
          <m.div custom={11} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInRight} className="absolute text-5xl xs:text-4xl -bottom-2 right-4 overflow-hidden">{data.bride.initial}</m.div>
          <m.div custom={11} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop} className="absolute text-7xl xs:text-6xl">/</m.div>
          <m.div custom={11} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInLeft} className="absolute text-5xl xs:text-4xl top-0 left-4 overflow-hidden">{data.groom.initial}</m.div>
        </div>
        <div className="overflow-hidden">
          <m.div custom={12} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop} className="text-4xl xs:text-3xl mb-2">{data.bride.nickname} & {data.groom.nickname}</m.div>
          <m.div custom={12} initial="init" whileInView="anim" viewport={{ once: true }} variants={vShowInRight} className="border-b border-primary"></m.div>
          <div className="flex justify-center items-center w-full">
            <div className="py-2">
              <m.div custom={13} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop} className="text-4xl xs:text-3xl tracking-widest font-light mb-6 flex justify-center items-center">
                <m.span>{rounded}</m.span> <span className="mx-2">.</span>{" "}
                <m.span>{rounded2}</m.span> <span className="mx-2">.</span>{" "}
                <m.span>{rounded3}</m.span>
              </m.div>
              <m.div custom={14} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}>
                <Link
                  href="#"
                  className="text-2xl xs:text-xl border px-4 py-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30"
                >
                  Save the date
                </Link>
              </m.div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
