function BoxColor(props) {
  console.log(props);
  const { r, g, b } = props;
  const BoxColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: "white",
    fontWeight: "bold",
    width: "200px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={BoxColor}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
