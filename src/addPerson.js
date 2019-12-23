import React, { Component } from "react";
import './App.css';
import DisplayPerson from "./displayPerson";

class AddPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				firstName: "",
				lastName: "",
				phone: "",
			},
			submit: false,
			people: []
		}
	}

	handleInputFirstName = (event) => {
		var person = { ...this.state.person }
		person.firstName = event.target.value;
		this.setState({ person })

	}
	handleInputLastName = (event) => {
		var person = { ...this.state.person }
		person.lastName = event.target.value;
		this.setState({ person })

	}

	handleInputPhone = (event) => {
		var person = { ...this.state.person }
		person.phone = event.target.value;
		this.setState({ person })
	}

	submit = (event) => {

		event.preventDefault();

		/*push each new contact into array */
		console.log(this.state.person);
		let people = this.state.people;
		people.push(this.state.person);


		/*sort the contact by last name  */
		people.sort((a, b) => a.lastName.localeCompare(b.lastName))

		// console.log(this.state.people);

		/*Clear the inputs  */
		this.inputFirstName.value = "";
		this.inputLasttName.value = "";
		this.inputPhone.value = "";

		/* submit the form  */
		this.setState({
			submit: true
		})

	}

	render() {
		return (
			<form>
				<input className="input" type="text" name="firstName" onChange={this.handleInputFirstName} placeholder="Enter First name" ref={el => this.inputFirstName = el} required />
				<input className="input" type="text" name="lastName" onChange={this.handleInputLastName} placeholder="Enter Last name" ref={el => this.inputLasttName = el} required />
				<input className="input" type="number" name="phone" onChange={this.handleInputPhone} placeholder="Enter Phone number" ref={el => this.inputPhone = el} required />
				<input className="inputBtn" type="submit" onClick={this.submit} value="submit" />

				{this.state.submit ?
					<DisplayPerson people={this.state.people} />
					: null
				}
			</form>

		)

	}

}

export default AddPerson;