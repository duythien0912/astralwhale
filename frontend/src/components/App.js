import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./page/home";
import {EarlySignUp} from "./page/early_sign_up";
import {EarlySignUpV2} from "./page/early_sign_up_2";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/user")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return {placeholder: "Something went wrong!"};
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <>
                {/*<div className="edica-loader"/>*/}
                {/*<EarlySignUp/>*/}
                <EarlySignUpV2/>
            </>
        );
    }
}

export default App;

const container = document.getElementById("app");

render(<App/>, container);
