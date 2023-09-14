
import {Ccc, CharonDd, Boat} from "../img/images"
import { motion } from "framer-motion";
const HomePage = (props) => {

  return (
    <div className="HomeContainer">
      <img src={CharonDd} alt= "illustration reading: Charon death doula" className="charonDdImg"></img>

      <img src={Ccc} alt= "Illustration reading: Conscious compassionate care" className="cccImg"></img>
      <div className="motion">
    <motion.div animate={{x:[0, 900]}}
    transition={{
      ease: "linear",
      duration: 20,
      delay: .5,
    }} 
    >
      <img src={Boat} alt= "illustration of boat with guiding light" className="boatImg" ></img>
      </motion.div>
     
      </div>
    </div>

  )
}

export default HomePage