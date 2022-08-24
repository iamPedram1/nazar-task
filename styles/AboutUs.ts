const containerDay = {
  backgroundColor: "#fff",
  p: "2rem 4rem",
  m: "0 1rem ",
  borderRadius: "10px",
};

const containerNight = {
  backgroundColor: "#2B343B",
};

export const textHolder = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export const title = {
  fontWeight: "500",
  fontSize: "1.5rem",
  mb: "2rem",
  color: "#071440",
};

const description = { lineHeight: "2rem", fontWeight: "400" };

export const container = (isNight: boolean): object[] | object =>
  isNight ? [containerDay, containerNight] : containerDay;

export const textHeader = (isNight: boolean): object[] | object =>
  isNight ? [title, { color: "#fff" }] : title;

export const textDescription = (isNight: boolean) =>
  isNight ? [description, { color: "#fff" }] : description;
