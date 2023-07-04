export const Card = ({ image, title, description }) => {
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
