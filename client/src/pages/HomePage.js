
import {Ccc, CharonDd, Boat} from "../img/images"
const HomePage = (props) => {

  return (
    <div className="HomeContainer">
      <img src={CharonDd} alt= "illustration reading: Charon death doula" className="charonDdImg"></img>

      <img src={Ccc} alt= "Illustration reading: Conscious compassionate care" className="cccImg"></img>
    {/* <motion.div animate={{x:[0, 100], opacity: 1, scale: 1}}
    transition={{
      duration:5,
      delay: .5,
    }} > */}
      <img src={Boat} alt= "illustration of boat with guiding light" className="boatImg" ></img>
      {/* </motion.div> */}
    </div>

  )
}

export default HomePage