import { useState } from "react"
import { TotalMoney } from "../TotalMoney/TotalMoney"
import "./style.css"

export const Form = ({listTransactions, setListTransactions}) => {

    const [description, setDescription] = useState("")

    const [moneyQty, setMoneyQty] = useState(0)

    const [type, setType] = useState("Entrada")

    const saveCard = () => {

        const id = Math.floor(Date.now() * Math.random()).toString(36)

        const newTransaction = {
            description: description, type: type, moneyQty: moneyQty, id: id
        }

        setListTransactions([...listTransactions, newTransaction])
    }

    return (
        <>
            <form action="" onSubmit={(e) => e.preventDefault()} className="main__form">

                <label className="form__descriptionTitle">Descrição</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite aqui sua descrição" className="form__description"/>
                <span className="form__example">Ex: Compra de roupas</span>

                <div className="form__moneyDiv">
                    <div className="moneyDiv__qty">

                        <label className="qty__label">Valor</label>
                        <input value={moneyQty} onChange={(e) => setMoneyQty(e.target.value)} type="number" placeholder="R$" className="qty__input"/>

                    </div>
                    <div className="moneyDiv__type">

                        <label htmlFor="" className="type__label">Tipo de valor</label>
                        <select value={type} onChange={(e) => setType(e.target.value)}className="type__select">

                            <option value={"Entrada"}>Entrada</option>
                            <option value={"Despesas"}>Despesa</option>

                        </select>
                    </div>
                </div>
                <button className="form__button" onClick={() => saveCard()}>Inserir Valor</button>
            </form>
            <div>
                <TotalMoney listTransactions={listTransactions} />
            </div>
        </>
    )
}
