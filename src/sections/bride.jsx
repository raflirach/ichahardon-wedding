import { vFadeInLeft, vFadeInRight, vFadeInTop, vScale } from "@/helpers/utils";
import data from "@/data/wedding-data.json"

export default function Bride({ m }) {
  return (
    <div className="relative" id="bride">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${data.background.one})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <m.div className="relative z-10 py-8 px-8 xs:px-4 grid place-items-center text-primary text-center font-semibold antialiased">
        <m.div custom={1} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale}
          className="relative flex flex-col justify-center items-center p-8 backdrop-filter bg-background/40 backdrop-brightness-[.75]"
        >
          <m.div custom={2} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale}
            className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary"
          />
          <m.div custom={3} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
            className="mb-4 text-lg xs:text-sm font-fira"
          >
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </m.div>
          <m.div custom={4} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
            className="mb-4 text-xl xs:text-md"
          >
            Assalamu’alaikum Wr. Wb.
          </m.div>
          <m.div custom={5} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
            className="text-center font-fira xs:text-sm"
          >
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
            insyaaAllah kami akan menyelenggarakan acara pernikahan:
          </m.div>
          <div className="my-12">
            <div>
              <m.div custom={6} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
                className="font-extrabold text-xl xs:text-lg"
              >
                {data.bride.name}
              </m.div>
              <m.div custom={7} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
                className="font-fira xs:text-sm"
              >
                Putri dari Bapak {data.bride.father} & Ibu {data.bride.mother}
              </m.div>
            </div>
            <div className="text-4xl my-4 flex justify-center items-center gap-4">
              <div>
                <m.hr custom={8} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInLeft}
                  className="left-0 right-0 border-b-1 border-solid border-primary w-20 xs:w-16"
                />
              </div>
              <m.div custom={8} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale}
                className="text-5xl xs:text-4xl italic"
              >
                &
              </m.div>
              <div>
                <m.hr custom={8} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInRight}
                  className="left-0 right-0 border-b-1 border-solid border-primary w-20 xs:w-16"
                />
              </div>
            </div>
            <div>
              <m.div custom={9} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
                className="font-extrabold text-xl xs:text-lg"
              >
                {data.groom.name}
              </m.div>
              <m.div custom={10} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}
                className="font-fira xs:text-sm"
              >
                Putra dari Bapak {data.groom.father} & Ibu {data.groom.mother}
              </m.div>
            </div>
          </div>
        </m.div>
      </m.div>
    </div>
  );
}
