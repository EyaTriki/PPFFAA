import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/userRedux";
import axios from "axios";


const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      // Envoyer une demande de déconnexion au serveur
      await axios.post("/api/auth");
      // Déconnecter l'utilisateur
      dispatch(logout());
      // Rediriger l'utilisateur vers la page d'accueil
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Êtes-vous sûr de vouloir vous déconnecter ?</h2>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Logout;
