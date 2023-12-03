import { vScale } from "@/helpers/utils";
import data from "@/data/wedding-data.json"

export default function SubHeader({ m }) {
  return (
    <div className="relative">
      <div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            backgroundImage: `url(${data.background.two})`,
            backgroundSize: "fit auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      <m.div className="relative z-10 py-20 px-8 xs:px-4 grid place-items-center text-xl xs:text-lg italic">
        <m.div custom={0} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="p-8 xs:p-6 relative bg-primary text-background">
          <m.div custom={1} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="w-full h-full border-2 border-secondary absolute top-2 left-2"/>
          <m.span custom={2} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale}>
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang.” QR. Ar-rum 21
          </m.span>
        </m.div>
      </m.div>
    </div>
  );
}
