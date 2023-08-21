import Rating from "./Rating";
function DriverCard(props) {
  console.log(props);
  const { name, rating, img } = props;
  const { model, licensePlate } = props.car;
  return (
    <div>
      <img src={img} width={"150px"}></img>
      <h3>{name}</h3>
      <Rating>{rating}</Rating>
      <p>{model}</p>
      <p>{licensePlate}</p>
    </div>
  );
}

export default DriverCard;
