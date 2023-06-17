import imgFile from "./IMAG0812.jpg";
import classes from "./styles.modules.css";
const Avatar = () => {
  const imgStyle = {
    width: "100%",
    display: "block"
  };

  return (
    //
    <div>
      <img className={classes.avatar} src={imgFile} alt="dori" />
    </div>
  );
};

export default Avatar;
