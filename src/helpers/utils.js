export const trans = {
  type: "spring",
  stiffness: 40,
  duration: 2,
};

export const scale = (n) => {
  return { scale: n, opacity: n };
};

export const vScale = {
  init: scale(0),
  anim: (i) => ({
    ...scale(1),
    transition: {
      ...trans,
      delay: i * 0.2,
    },
  }),
};

export const vFadeInTop = {
  init: { y: "100%", opacity: 0 },
  anim: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      ...trans,
      delay: i * 0.2,
    },
  }),
};

export const vFadeInBottom = {
  init: { y: "-100%", opacity: 0 },
  anim: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      ...trans,
      delay: i * 0.2,
    },
  }),
};

export const vFadeInRight = {
  init: { x: "-100%", opacity: 0 },
  anim: (i) => ({
    x: "0%",
    opacity: 1,
    transition: {
      ...trans,
      delay: i * 0.2,
    },
  }),
};

export const vFadeInLeft = {
  init: { x: "100%", opacity: 0 },
  anim: (i) => ({
    x: "0%",
    opacity: 1,
    transition: {
      ...trans,
      delay: i * 0.2,
    },
  }),
};

export const vShowInRight = {
  init: { x: "-100%" },
  anim: (i) => ({
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 10,
      duration: 10,
      delay: i * 0.2,
    },
  }),
};
