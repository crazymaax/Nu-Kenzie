import trashbin from "../../img/trashbin.png"
import "./style.css"

export const Card = ({ transaction, /* key, */ remove }) => {

    const Entradas = " entradas"
    const Despesas = " despesas"

    return (
        <>
            {transaction.type === "Entrada" ? (

                <li className="list">

                        <div className={["list__infos" + Entradas]}>
                        
                            <h3 className="infos__description">{transaction.description}</h3>
                            <span className="infos_type">{transaction.type}</span>
                        </div>

                    <div className="list_values">

                        <span>R$ {transaction.moneyQty}</span>
                        <figure className="trashbin">
                            <img onClick={() => remove(transaction.id)} src={trashbin} alt="Excluir" />
                        </figure>

                    </div>
                </li>

            ) : (

                <li className="list">

                        <div className={["list__infos" + Despesas]}>
                        
                            <h3 className="infos__description">{transaction.description}</h3>
                            <span className="infos_type">{transaction.type}</span>
                        </div>

                    <div className="list_values">

                        <span>R$ {transaction.moneyQty}</span>
                        <figure className="trashbin">
                            <img onClick={() => remove(transaction.id)} src={trashbin} alt="Excluir" />
                        </figure>

                    </div>
                </li>
            )}

        </>
    )
}