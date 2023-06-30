const Image = (props) => {
  const {src, width, title, classname} = props
  return (
    <img className={`${classname}`}
      src={src}
      alt={title}
      width={width}
    />
  );
};


export default Image;
