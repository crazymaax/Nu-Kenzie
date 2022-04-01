import "./style.css"

export const TotalMoney = ({listTransactions}) => {

    const Total = () => {

        return (
            listTransactions.reduce((acc, actual) => (acc + Number(actual.type === "Entrada" ? (actual.moneyQty) : (actual.moneyQty * -1 ))),0)
        )
    }

    return (
        <div className="totalMoney">
            <div className="totalMoney__info">
                <span className="info__total">Valor total:</span>
                <p className="info__text">O valor se refere ao saldo</p>
            </div>
            <span className="totalMoney__money">$ {Total()}</span>
        </div>
    )
}