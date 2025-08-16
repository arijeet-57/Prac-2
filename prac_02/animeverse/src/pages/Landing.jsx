import {useNavigate} from "react-router-dom";

export function Landing() {

    
    const navigate = useNavigate(); //Navigate the user to the first universe of dbz
            const enterVerse = () => {
                navigate("/DragonBall")
        }


    return(
        <div>
            <h1>Welcome to the Animeverse</h1>
            <button onClick={enterVerse}>Enter the Animeverse</button>
        </div>
    )
}