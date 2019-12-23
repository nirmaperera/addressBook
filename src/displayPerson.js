import React, { Component } from "react";
import './App.css';



class DisplayPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    render() {
        if (this.props.people) {
            var allPeople = this.props.people.map(function (person) {
                return (
                    <div className="contact">
                        <li className="info">{person.firstName}</li>
                        <li className="info">{person.lastName}</li>
                        <li className="info">{person.phone}</li>
                    </div>
                );
            });
        }
        return (
            <div className="peopleList">
                <ul>
                    {allPeople}
                </ul>
            </div>
        );
    }

}
export default DisplayPerson;