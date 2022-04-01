import NuHomePageExample from "../../img/NuHomePageExample.png"
import "./style.css"

export const HomePage = ({setIsLoggedIn}) => {
    
    const handleLogin = () => {
        return setIsLoggedIn(true)
    }

    return(
        <>
        <section className="App__background">
            <div className="background__NuKenzieInfo">
                <h1 className="NuKenzieInfo__title"> <span className="NuKenzieInfo__Nu">Nu</span> Kenzie</h1>
                <p className="NuKenzieInfo__p">Centralize o controle das suas finanças</p>
                <span className="NuKenzieInfo__span">de forma rápida e segura</span>
                <button className="NuKenzieInfo__button" onClick={handleLogin}>Iniciar</button>
            </div>
            <div className="background__image">
                <figure className="image__figure">
                    <img src={NuHomePageExample} alt="Exemplo da Aplicação" />
                    <figcaption>Exemplo da Aplicação</figcaption>
                </figure>
            </div>
        </section>
        </>
    )
}