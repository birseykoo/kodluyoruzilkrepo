import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    <br/>
      <br />
      <br />
      <form>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={onChangeInput} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={form.email} onChange={onChangeInput} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={onChangeInput} />
        </label>
      </form>


    </div>
  );
}

export default App;