import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/userRedux";
import axios from "axios";
import { useSelector } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.currentUser);
  
  const handleLogout =  async () => {
    console.log(user)
    try {
      // Envoyer une demande de déconnexion au serveur
      await axios.post("http://localhost:8005/api/auth/logout" , user);
      // Déconnecter l'utilisateur
       dispatch(logout());
      // Rediriger l'utilisateur vers la page d'accueil
      
    } catch (error) {
      console.log(error);
    }
    
    localStorage.clear();
    history.push("/");
    window.location.reload(false);


  };

  return (
    <div>
      <h2>Êtes-vous sûr de vouloir vous déconnecter ?</h2>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Logout;
