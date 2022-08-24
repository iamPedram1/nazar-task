export const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  padding: "2rem",
  margin: "0 1rem",
  backgroundColor: "#fff",
};

export const homeContainer = (isNight: boolean): object[] | object =>
  isNight ? [container, { backgroundColor: "#2B343B" }] : container;
