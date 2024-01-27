const CustomImage = ({ className, id, source, width = 0, height = 0 }) => (
  <img className={className && className}
       id={id && id}
       src={source}
       width={width}
       height={height}
       loading={"lazy"}
       alt={""}
  />
)

export default CustomImage;
