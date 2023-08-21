function Random(props) {
  console.log(props);
  const { min, max } = props;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <h3>
        Random value between {min} and {max} = {random}
      </h3>
    </div>
  );
}

export default Random;
