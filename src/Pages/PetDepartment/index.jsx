import { useParams } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar";

const PetDepartment = () => {
  const { pet } = useParams();

  console.log(pet);

  return (
    <>
      <NavbarComponent />
      <p>{pet}</p>
    </>
  );
};

export default PetDepartment;
