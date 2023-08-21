function BoxColor(props) {
  console.log(props);
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div>
      <p>{number}</p>
      <p>{type}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{bgColor}</p>
      <p>{color}</p>
      <p>{expirationMonth}</p>
      <p>{expirationYear}</p>
    </div>
  );
}

export default BoxColor;
