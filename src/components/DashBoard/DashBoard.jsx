import { useState } from "react"
import { Form } from "../Form/Form"
import { List } from "../List/List"
import "./style.css"

export const DashBoard = ({ setIsLoggedIn, listTransactions, setListTransactions }) => {

    const handleLogout = () => {
        return setIsLoggedIn(false)
    }

    const [transactionsFilter, setTransactionsFilter] = useState([])

    const showTransactionFiltered = (type, e) => {
        const newTransactions = listTransactions.filter((transactions) => {
            return transactions.type === type
        })

        setTransactionsFilter(newTransactions);

        const button = e.target
        
        let className = "list_button"
        let selected = document.getElementsByClassName("list_button selected")

        if(selected){
            while (selected[0]){
                selected[0].classList.remove("selected")
            }
        }

        button.className = className.replace("list_button", "list_button selected")

    }

    return (
        <>
            <header className="dashBoard__header">

                <h1 className="header__title"> <span className="header__Nu">Nu</span> Kenzie</h1>
                <button className="header__button" onClick={handleLogout}>Inicio</button>

            </header>
            <main className="main">

                <section>
                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
                </section>

                <section>
                    <nav className="nav">
                        <span className="summary">Resumo financeiro</span>
                        <div>

                            <ul className="nav__list">
                                
                                <li> <button className="list_button" onClick={(e) => showTransactionFiltered("", e)}>Todos</button> </li>
                                <li> <button className="list_button" onClick={(e) => showTransactionFiltered("Entrada", e)}>Entradas</button></li>
                                <li> <button className="list_button" onClick={(e) => showTransactionFiltered("Despesas", e)}>Despesas</button></li>

                            </ul>
                        </div>
                    </nav>

                    <List listTransactions={transactionsFilter.length > 0 ?
                        transactionsFilter
                        :
                        listTransactions} setListTransactions={setListTransactions} />
                </section>
            </main>
        </>
    )
}