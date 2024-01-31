let SmallWindowWidth = window.innerWidth <= 650;
export const hover = {
  scale: SmallWindowWidth ? 1.3 : 1.1,
  transition: {
    duration: 0.4,
    easing: [0.37, 0, 0.63, 1],
  },
};

export const hoverSmall = {
  scale: 1.01,
  transition: {
    duration: 0.4,
    easing: [0.37, 0, 0.63, 1],
  },
};
