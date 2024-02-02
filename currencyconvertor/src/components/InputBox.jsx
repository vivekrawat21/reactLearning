/* eslint-disable react/prop-types */
import { useId } from "react"
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency,
  amountDisable = false,
  currencyDisabel = false,

  className="",
}) {
  const amountInputId = useId() //this will generate a unique and random id...
  return (
  <>
  <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    <div className="w-1/2">

      <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
        {label}
      </label>
      <input 
      type="number" 
      className="outline-none w-full bg-transparent py-1.5"
      placeholder="Amount"
      disabled={amountDisable}
      value={amount}
      onChange={(e)=>onAmountChange && //if amount chnaged is passed then the next line will run
      onAmountChange(Number(e.target.value))} //sometimes javascript change the target.value in the string so thats why we change it to the number so that no problem occur
      id={amountInputId}
      />

    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">
      Currency Type
      </p>
      <select
      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
      value={selectCurrency}
      onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
      disabled={currencyDisabel}>
      {currencyOptions.map((currency)=>(
          <option key={currency} value={currency}> 
          {currency}
        </option>
      ))}
        </select>
    </div>
  </div>
  </>
  )
}

export default InputBox