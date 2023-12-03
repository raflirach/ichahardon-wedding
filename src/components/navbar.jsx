import Link from "next/link";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MusicOffRoundedIcon from "@mui/icons-material/MusicOffRounded";
import { motion as m } from "framer-motion";

export default function Navbar({
  audioElement,
  isPlay,
  setIsPlay,
  handleOnClick,
}) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 2,
        delay: 3,
      }}
      className="navbar-containter bottom-0 fixed left-1/2 -translate-x-2/4 z-50"
    >
      <div className="navbar backdrop-filter backdrop-brightness-75">
        <div className="icons">
          <Link href={"#home"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 3.2,
              }}
              className="span-hover"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </m.span>
          </Link>

          <Link href={"#bride"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 3.4,
              }}
              className="span-hover"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </m.span>
          </Link>

          <Link href={"#event"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 3.6,
              }}
              className="span-hover"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </m.span>
          </Link>

          <Link href={"#gallery"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 3.8,
              }} className="span-hover">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                />
              </svg>
            </m.span>
          </Link>

          <Link href={"#gift"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 4,
              }} className="span-hover">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
              </svg>
            </m.span>
          </Link>

          <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 4.2,
              }} onClick={handleOnClick}>
            <svg className="w-8 h-8 xs:w-6 xs:h-6">
              {isPlay ? <MusicNoteRoundedIcon /> : <MusicOffRoundedIcon />}
            </svg>
          </m.span>
        </div>
      </div>
    </m.div>
  );
}
