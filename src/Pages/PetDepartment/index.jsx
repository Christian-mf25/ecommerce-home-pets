import { useParams } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar";

const PetDepartment = () => {
  const { pet } = useParams();

  console.log(pet);

  return (
    <>
      <NavbarComponent />
      <p>{pet}</p>
      <div>
        <div>Melhores produtos</div>
        <div>cards</div>
      </div>
    </>
  );
};

export default PetDepartment;
