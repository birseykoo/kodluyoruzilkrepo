import { useState, useEffect } from "react";

const initailFormValue = {
	fullName: "",
	phone: "",
}
function Form({ addContact, contacts }) {
	const [form, setForm] = useState({ fullName: "", phone: "" });

	useEffect(() => {
		setForm(initailFormValue);
	}, [contacts]);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (form.fullName === "" || form.phone === "") {
			return false;
		}
		addContact([...contacts, form]);
		// setForm({ ...form, fullName: "", phone: "" });
		// setForm(initailFormValue);
		if(e.target.value <= 11){
			this.setState({
				value: e.target.value,
				valid: true,
			});
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<input
					name="fullName"
					value={form.fullName}
					type="text"
					placeholder="Ad Soyad"
					onChange={onChangeInput}
				/>
			</div>
			<div>
				<input
					name="phone"
					value={form.phone}
					type="text"
					maxLength="11"
					placeholder="0(541)0000000"
					pattern ="^[0-9]{11}$"
					onChange={onChangeInput}
				/>
			</div>
			<div>
				<button>Kaydet</button>
			</div>
		</form>
	);
}

export default Form;
