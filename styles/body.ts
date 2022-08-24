const container = {
  direction: "rtl",
  padding: "1rem 0 1.6rem",
  backgroundColor: "#f5f5f5",
};

const nightMode = {
  backgroundColor: "#1E272E",
};

export default function pageContainer(isNight: boolean): object[] | object {
  return isNight ? [container, nightMode] : container;
}
