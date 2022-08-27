const container = {
  direction: "rtl",
  padding: "1rem 0 1.6rem",
  backgroundColor: "#f5f5f5",
};

const nightMode = {
  backgroundColor: "#1E272E",
};

export const pageContainer = (isNight: boolean): object[] | object =>
  isNight ? [container, nightMode] : container;

export const bodyStyles = (isNight: boolean) => {
  if (typeof document !== "undefined") {
    document.body.style.direction = "rtl !important";
    isNight
      ? (document.body.style.background = "#2B343B")
      : (document.body.style.background = "#fff");
  }
};
