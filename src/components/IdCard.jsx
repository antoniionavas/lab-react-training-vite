function IdCard(props) {
  console.log(props);
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <img src={picture}></img>
      <p>First Name:{firstName}</p>
      <p>Last Name:{lastName}</p>
      <p>Gender:{gender}</p>
      <p>Height:{height / 100}m</p>
      <p>Birth:{birth.toDateString()}</p>
    </div>
  );
}

export default IdCard;
