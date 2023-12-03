import { vScale } from "@/helpers/utils";
import { useState } from "react";
import data from "@/data/wedding-data.json";

export default function Gift({ m }) {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const handleOnClick = () => {
    navigator.clipboard.writeText(2832342361);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  const handleOnClick2 = () => {
    navigator.clipboard.writeText(7401814837);
    setClicked2(true);
    setTimeout(() => {
      setClicked2(false);
    }, 3000);
  };

  return (
    <div className="relative" id="gift">
      {data.show_gallery ? (
        <div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            backgroundImage: `url(${data.background.one})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      ) : (
        <div className="absolute inset-0 bg-fixed bg-cover"></div>
      )}
      <div className="relative z-10 grid place-items-center text-primary text-center font-semibold antialiased py-8 px-8 xs:px-4">
        <div>
          <m.div
            custom={0}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vScale}
            className="relative flex flex-col justify-center items-center p-4 backdrop-filter bg-background/40 backdrop-brightness-[.75] mb-2"
          >
            <m.div
              custom={1}
              initial="init"
              whileInView="anim"
              viewport={{ once: true }}
              variants={vScale}
              className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary"
            />
            <m.div
              custom={2}
              initial="init"
              whileInView="anim"
              viewport={{ once: true }}
              variants={vScale}
              className="text-2xl xs:text-xl"
            >
              {" "}
              Kirim Hadiah{" "}
            </m.div>
          </m.div>
          {data.show_bank && (
            <div className="flex gap-2 xs:gap-1">
              <m.div
                custom={3}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vScale}
                className="relative flex flex-col justify-center items-center p-4 xs:p-3 w-1/2 backdrop-filter bg-background/40 backdrop-brightness-[.75]"
              >
                <m.div
                  custom={4}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  className="absolute border-2 border-solid w-full h-full top-2 -left-2 border-primary"
                />
                <m.img
                  custom={5}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  src={`./theme/${data.theme}/${data.bank_accounts.account_provider1}.svg`}
                  className="h-20 w-20 xs:h-16 xs:w-16 animate-pulse"
                />
                <m.div
                  custom={6}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  className="text-md font-fira xs:text-sm"
                >
                  {" "}
                  a/n {data.bank_accounts.account_name1}{" "}
                </m.div>
                <m.div
                  custom={7}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  className="mb-1 text-lg xs:text-sm"
                >
                  {" "}
                  {data.bank_accounts.account_no1}{" "}
                </m.div>
                <button
                  className="text-sm xs:text-xs border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10"
                  onClick={handleOnClick}
                >
                  <m.div
                    custom={8}
                    initial="init"
                    whileInView="anim"
                    viewport={{ once: true }}
                    variants={vScale}
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                      />
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                      />
                    </svg>
                    {clicked ? "Copied" : "Copy"}
                  </m.div>
                </button>
              </m.div>
              <m.div
                custom={3}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vScale}
                className="relative flex flex-col justify-center items-center p-4 xs:p-3 w-1/2 backdrop-filter bg-background/40 backdrop-brightness-[.75]"
              >
                <m.div
                  custom={4}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  className="absolute border-2 border-solid w-full h-full top-2 left-2 border-primary"
                />
                <m.img
                  custom={5}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  src={`./theme/${data.theme}/${data.bank_accounts.account_provider2}.svg`}
                  className="h-20 w-20 xs:h-16 xs:w-16 animate-pulse"
                />
                <m.div
                  custom={6}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  className="text-md font-fira xs:text-sm"
                >
                  {" "}
                  a/n {data.bank_accounts.account_name2}{" "}
                </m.div>
                <m.div
                  custom={7}
                  initial="init"
                  whileInView="anim"
                  viewport={{ once: true }}
                  variants={vScale}
                  className="mb-1 text-lg xs:text-sm"
                >
                  {" "}
                  {data.bank_accounts.account_no2}{" "}
                </m.div>
                <button
                  className="text-sm xs:text-xs border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10"
                  onClick={handleOnClick2}
                >
                  <m.div
                    custom={8}
                    initial="init"
                    whileInView="anim"
                    viewport={{ once: true }}
                    variants={vScale}
                    className="flex justify-center items-center gap-1"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                      />
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                      />
                    </svg>
                    {clicked2 ? "Copied" : "Copy"}
                  </m.div>
                </button>
              </m.div>
            </div>
          )}
          <m.div
            custom={9}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vScale}
            className="relative flex flex-col justify-center items-center p-4 backdrop-filter bg-background/40 backdrop-brightness-[.75] mt-4"
          >
            <m.div
              custom={10}
              initial="init"
              whileInView="anim"
              viewport={{ once: true }}
              variants={vScale}
              className="absolute border-2 border-solid w-full h-full top-2 left-2 border-primary"
            />
            <m.div
              custom={11}
              initial="init"
              whileInView="anim"
              viewport={{ once: true }}
              variants={vScale}
              className="text-xl xs:text-lg"
            >
              {" "}
              Alamat{" "}
            </m.div>
            <m.div
              custom={12}
              initial="init"
              whileInView="anim"
              viewport={{ once: true }}
              variants={vScale}
              className="font-fira text-sm xs:text-xs"
            >
              {data.address}
            </m.div>
          </m.div>
        </div>
      </div>
    </div>
  );
}
