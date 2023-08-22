import { useAuth } from "../context/AuthContext";

function ProfilePage(){
    const { user } = useAuth();

    return (
        <div>
            Bienvenido aqui una breve reseña del cliente: {user.username}
        
            <br/>
            <img src="https://www.adslzone.net/app/uploads-adslzone.net/2021/02/Google-Chrome-perfil.jpg?x=480&y=375&quality=40" alt="Imagen Centrada" />
        
        </div>

        
    )
}

export default ProfilePage