export const flexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const title = {
  fontWeight: "400",
  cursor: "pointer",
};

export const icons = {
  position: "relative",
  top: "5px",
};

export const containerColor = (isNight: boolean): object => {
  return isNight ? { backgroundColor: "#2B343B" } : { backgroundColor: "#fff" };
};

export const navTitle = (isNight: boolean): object[] | object => {
  return isNight ? [title, { color: "#fff" }] : title;
};
