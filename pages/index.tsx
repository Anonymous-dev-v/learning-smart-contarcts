import abi from "contracts/abi.json"
import { useState } from "react"

const Web3 = require("web3")

declare global {
  interface Window {
    ethereum: any
    gtag: any
  }
}

export default function Home() {
  const [account, setAccount] = useState<string>("")
  const [value, setValue] = useState<string>("")
  const [result, setResult] = useState<string>("")

  async function getAccount() {
    if (typeof window !== undefined) {
      const { ethereum } = window as any
      console.log(window)
      console.log(ethereum)

      if (!ethereum) {
        return
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      console.log(accounts)
      setAccount(accounts[0])
    }
  }
  console.log(value)

  const registerSetStr = async (value: any, account: any) => {
    if (typeof window !== undefined) {
      const web3 = new Web3(window.ethereum)

      const contractAddress = Web3.utils.toChecksumAddress("0x5A6cc50a2CD45F9190699cd08d10A855d9B9BEe7")
      //contract instance
      const contract = new web3.eth.Contract(abi, contractAddress)

      const response = await contract.methods.setStr(value).send({ from: account })

      console.log("Transaction: ", response)
    }
  }

  const registerGetStr = async (setResult: any) => {
    if (typeof window !== undefined) {
      const web3 = new Web3(window.ethereum)

      const contractAddress = Web3.utils.toChecksumAddress("0x5A6cc50a2CD45F9190699cd08d10A855d9B9BEe7")
      //contract instance
      const contract = new web3.eth.Contract(abi, contractAddress)

      const response = await contract.methods.getStr().call()

      console.log("Response: ", response)
      setResult(response)
    }
  }

  return (
    <>
      {!account && (
        <button
          onClick={() => getAccount()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect
        </button>
      )}
      {account && (
        <>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button
            onClick={() => registerSetStr(value, account)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Set
          </button>

          <button
            onClick={() => registerGetStr(setResult)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get
          </button>

          <p>{result}</p>
        </>
      )}
    </>
  )
}
