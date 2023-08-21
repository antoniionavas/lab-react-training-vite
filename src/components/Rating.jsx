function Rating(props) {
  console.log(props);
  const { children } = props;
  const numEstrellas = Math.round(children);
  return (
    <div>
      <p>
        {" "}
        {"★".repeat(numEstrellas)}
        {"☆".repeat(5 - numEstrellas)}{" "}
      </p>
    </div>
  );
}

export default Rating;
