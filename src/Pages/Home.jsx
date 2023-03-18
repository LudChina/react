import Productos from "../Components/Productos";
import firebase from "../Config/firebase";

function Home() {
  console.log("firebase");
  console.log(firebase);
    return(
        <>
          <div className="">
            <Productos />
          </div>
        </>
    );
}
export default Home;