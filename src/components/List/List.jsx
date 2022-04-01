import { Card } from "../Card/Card"
import NoCard from "../../img/noCard.png"
import "./style.css"

export const List = ({ listTransactions, setListTransactions }) => {

    const remove = (value) => {

        const cards = listTransactions.filter((card) => card.id !== value)

        setListTransactions(cards)
    }

    return (
        <ul>
            {listTransactions.length > 0 ? 
            listTransactions.map((transaction, index) =>
            <Card transaction={transaction} key={index} remove={remove} />) 
            : (
            <>
                <p className="noCard">Você ainda não possui nenhum lançamento</p>
                <img src={NoCard} alt="Exemplos de lançamento" />            
            </>
             )
            }
        </ul>
    )
}