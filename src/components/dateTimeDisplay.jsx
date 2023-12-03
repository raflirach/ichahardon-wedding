import { trans } from "@/helpers/utils";

const DateTimeDisplay = ({ value, type, m, i }) => {
  return (
    <div className="flex flex-col text-center w-20 xs:w-14">
      <m.div
        initial={{ y: "100%", opacity: 0 }}
        transition={{ ...trans, delay: 1 + (i * .2) }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-4xl xs:text-3xl"
      >
        {value}
      </m.div>
      <m.div
        initial={{ y: "100%", opacity: 0 }}
        transition={{ ...trans, delay: 1 + (i * .4) }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="font-alice xs:text-sm"
      >
        {type}
      </m.div>
    </div>
  );
};

export default DateTimeDisplay;
