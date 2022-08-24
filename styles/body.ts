const container = {
  direction: "rtl",
  padding: "1rem 0 1.6rem",
  backgroundColor: "#f5f5f5",
};

const nightMode = {
  backgroundColor: "#1E272E",
};

const bodyStyle = (isNight: boolean): object[] | object =>
  isNight ? [container, nightMode] : container;

export default bodyStyle;
