import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import InputBox from "./components/InputBox";
import InfoCard from "./components/InfoCard";
import DataCard from "./components/DataCard";
function App() {
  const [data, setData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("financeData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("financeData", JSON.stringify(data));
    }, 1000);
    setTotalIncome(0);
    setTotalExpense(0);

    data.map((item) => {
      if (item.type === "income") {
        setTotalIncome((prev) => {
          return prev + parseInt(item.amount);
        });
      } else if (item.type === "expense") {
        setTotalExpense((prev) => {
          return prev + parseInt(item.amount);
        });
      }
    });
  }, [data]);

  const todayDate = new Date();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(todayDate.toLocaleDateString("en-GB"));

  function handleSubmit() {
    setData([...data, { title, type, amount, date, id: Date.now() }]);
    setTitle("");
    setAmount("");
    setDate(new Date().toLocaleDateString("en-GB"));
  }

  function checkSubmit() {
    if (!title || !type || !amount || !date) {
      return false;
    } else if (isNaN(amount) || amount <= 0) {
      return false;
    }
    return true;
  }

  return (
    <>
      <Navbar />
      <div className="my-4 h-auto w-auto">
        <div className="grid sm:grid-cols-2">
          <div className="bg-white shadow-xl lg:w-120  lg:h-60 md:w-90 md:h-60 sm:w-75 sm:h-60 w-90 h-50  my-2 rounded-xl mx-auto">
            <div className="grid grid-cols-2 p-4">
              <InputBox
                name={"Title"}
                onchange={(e) => {
                  setTitle(e.target.value);
                }}
                css={""}
                value={title}
              />
              <div className="mx-auto w-auto my-3">
                <select
                  id="type"
                  name="type"
                  className="bg-slate-200 text-center lg:w-52 md:w-35 md:h-8 sm:w-30 sm:h-8 w-38 h-8 text-sm md:text-lg shadow focus:outline-none border focus:ring-2 focus:ring-purple-400 rounded"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  value={type}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <InputBox
                name={"Amount"}
                onchange={(e) => {
                  setAmount(e.target.value);
                }}
                value={amount}
              />

              <InputBox name={"Date"} value={date} />
              <div className="w-auto flex justify-center col-span-2">
                <button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold px-3 text-xl py-2"
                  onClick={() => {
                    if (checkSubmit()) {
                      handleSubmit();
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl lg:w-120 lg:h-60 md:w-90 md:h-60 sm:w-75 sm:h-60 w-90 h-50 my-2 rounded-xl mx-auto">
            <div className="grid grid-cols-2 justify-items-center h-full">
              <DataCard
                totalType={"Total Income"}
                money={`+₹${totalIncome}`}
                css={`lg:w-45  sm:h-25 h-22 my-auto text-green-800 text-sm`}
              />
              <DataCard
                totalType={"Total Expense"}
                money={`-₹${totalExpense}`}
                css={`lg:w-45  sm:h-25 h-22 my-auto text-red-800 text-sm`}
              />
              <DataCard
                totalType={"Total Savings"}
                money={`₹${totalIncome - totalExpense}`}
                css={`lg:w-45  sm:h-25 h-22 col-span-2 my-auto text-blue-800 text-lg`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h2
          className={`text-2xl w-auto font-bold px-3 py-1 rounded-3xl my-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-black ${
            data.length > 0 ? "" : "hidden"
          }`}
        >
          Transaction History
        </h2>
      </div>
      <div>
        <InfoCard
          title={"Title"}
          amount={"Amount"}
          type={"Type"}
          date={"Date"}
          css={`text-l font-bold mr-30 md:text-xl ${
            data.length > 0 ? "" : "hidden"
          }`}
          hidden={true}
        />
      </div>
      <div>
        {data.length === 0 ? (
          <div className="text-center text-gray-500 font-semibold my-4">
            No transactions found.
          </div>
        ) : (
          data.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              amount={item.amount}
              type={item.type}
              date={item.date}
              ondelete={() => {
                const updatedData = data.filter((i) => i.id !== item.id);
                setData(updatedData);
              }}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
