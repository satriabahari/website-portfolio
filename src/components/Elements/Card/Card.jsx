const Card = (props) => {
  const {image, title, description} = props
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
