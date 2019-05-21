
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";

import React from 'react';

import ReactDOM from 'react-dom';

import { FormWithConstraints, FieldFeedbacks, Async, FieldFeedback } from 'react-form-with-constraints';

import 'views/UserProfile/style.css';

import { DisplayFields } from 'react-form-with-constraints-tools';
function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.text()); // parses response to JSON
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// See https://en.wikipedia.org/wiki/List_of_the_most_common_passwords
const isACommonPassword = async (password: string) => {
    console.log('isACommonPassword');
    await sleep(1000);
    return [
        '123456',
        'password',
        '12345678',
        'qwerty',
        '12345',
        '123456789',
        'letmein',
        '1234567',
        'football',
        'iloveyou',
        'admin',
        'welcome',
        'monkey',
        'login',
        'abc123'
    ].includes(password.toLowerCase());
};

interface Props { }

interface State {
    email: string;
    password: string;
    passwordConfirm: string;
    signUpButtonDisabled: boolean;
}

export default class Form extends React.Component<Props, State> {
   
    form: FormWithConstraints | null = null;
    password: HTMLInputElement | null = null;

    state: State = {
        email: '',
        password: '',
        passwordConfirm: '',
        signUpButtonDisabled: false,

    };

    handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;

        // FIXME See Computed property key names should not be widened https://github.com/Microsoft/TypeScript/issues/13948
        // @ts-ignore
        this.setState({
            [target.name as keyof State]: target.value
        });

        // Validates only the given field and returns the related FieldValidation structures
        const fields = await this.form!.validateFields(target);

        const fieldIsValid = fields.every(fieldFeedbacksValidation => fieldFeedbacksValidation.isValid());
        if (fieldIsValid) console.log(`Field '${target.name}' is valid`);
        else console.log(`Field '${target.name}' is invalid`);

        if (this.form!.isValid()) console.log('The form is valid');
        else console.log('The form is invalid');

        this.setState({ signUpButtonDisabled: !this.form!.isValid() });
    }

    handlePasswordChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;

        // FIXME See Computed property key names should not be widened https://github.com/Microsoft/TypeScript/issues/13948
        // @ts-ignore
        this.setState({
            [target.name as keyof State]: target.value
        });

        const fields = await this.form!.validateFields(target, 'passwordConfirm');

        const fieldsAreValid = fields.every(field => field.isValid());
        if (fieldsAreValid) console.log(`Fields '${target.name}' and 'passwordConfirm' are valid`);
        else console.log(`Fields '${target.name}' and/or 'passwordConfirm' are invalid`);

        if (this.form!.isValid()) console.log('The form is valid');
        else console.log('The form is invalid');

        this.setState({ signUpButtonDisabled: !this.form!.isValid() });
    }
    resetPass = (event) => {
        event.preventDefault();
        console.log(this.state);
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/UserProfile/Edit1.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        //  alert(`Updated Successfully ^_^`)


        return (
            <div>

                <h4 color="primary">Updated Successfuly</h4> :
          <span> </span>
            </div>

        )
    }
    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        // Validates the non-dirty fields and returns the related FieldValidation structures
        const fields = await this.form!.validateForm();

        // or simply use this.form.isValid()
        const formIsValid = fields.every(field => field.isValid());

        if (formIsValid) console.log('The form is valid');
        else console.log('The form is invalid');

        this.setState({ signUpButtonDisabled: !formIsValid });

        if (formIsValid) {
            alert(`Valid form\n\nthis.state =\n${JSON.stringify(this.state, null, 2)}`);
        }

        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/UserProfile/Edit1.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        // alert(`Updated Successfully ^_^`)
       // this.myFormRef.reset(); 
     // event.target.reset();
        return (
            <div>
                <h4>Updated Successfuly</h4>
            </div>
        )
    }

    render() {
        const styleInput = {
            width: "150%",
            alignContent: "Center",
            height: "20px",
            margin: "3px 0",
            border: "1px solid #000",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",

        };
        return (
            <FormWithConstraints action="Edit1.php" ref={formWithConstraints => this.form = formWithConstraints}
          style={{ alignContent: "Center" }} onSubmit={this.handleSubmit} noValidate>
          <form  style={{ alignContent: "Center" }} id="myForm">
                <div style={{ alignContent: "Center" }}>

                    <InputLabel htmlFor="email" style={{ color: "#000", alignContent: "Center" }}><b>ID</b></InputLabel>
                    <input type="number" name="id" id="id" style={styleInput} required onChange={this.handleChange} />
                    <br/>

                    <InputLabel htmlFor="email" style={{ color: "#000", alignContent: "Center" }}><b>Current Password</b></InputLabel>
                    <input type="password" name="email" id="email" style={styleInput}
                        value={this.state.email} onChange={this.handleChange}
                        required minLength={5} />
                    <FieldFeedbacks for="email">
                        <FieldFeedback when="tooShort"><b>Too short</b></FieldFeedback>
                        <FieldFeedback when="*" />
                        <FieldFeedback when="valid"><b>Looks good!</b></FieldFeedback>
                    </FieldFeedbacks>
                </div>

                <div>
                    <InputLabel htmlFor="password" style={{ color: "#000", alignContent: "Center" }}><b>NEW Password</b></InputLabel>
                    <input type="password" name="password" id="password" style={styleInput}
                        ref={password => this.password = password}
                        value={this.state.password} onChange={this.handlePasswordChange}
                        required pattern=".{5,}" />
                    <FieldFeedbacks for="password">
                        <FieldFeedback when="valueMissing" />
                        <FieldFeedback when="patternMismatch"><b>Should be at least 5 characters long</b></FieldFeedback>
                        <FieldFeedback when={value => !/\d/.test(value)} warning ><b>Should contain numbers</b> </FieldFeedback>
                        <FieldFeedback when={value => !/[a-z]/.test(value)} warning><b>Should contain small letters</b></FieldFeedback>
                        <FieldFeedback when={value => !/[A-Z]/.test(value)} warning><b>Should contain capital letters</b></FieldFeedback>
                        <FieldFeedback when={value => !/\W/.test(value)} warning><b>Should contain special characters</b></FieldFeedback>
                        <Async
                            promise={isACommonPassword}
                            pending={<span style={{ display: 'block' }}>...</span>}
                            then={commonPassword => commonPassword ?
                                <FieldFeedback warning><b>This password is very common</b></FieldFeedback> : null
                            }
                        />
                        <FieldFeedback when="valid"><b>Looks good!</b></FieldFeedback>
                    </FieldFeedbacks>
                </div>

                <div>
                    <InputLabel htmlFor="password-confirm" style={{ color: "#000", alignContent: "Center" }}><b>Confirm Password</b></InputLabel>
                    <input type="password" name="passwordConfirm" id="password-confirm" style={styleInput}
                        value={this.state.passwordConfirm} onChange={this.handleChange} />
                    <FieldFeedbacks for="passwordConfirm">
                        <FieldFeedback when={value => value !== this.password!.value}><b>Not the same password</b></FieldFeedback>
                    </FieldFeedbacks>
                </div>


                <Button disabled={this.state.signUpButtonDisabled} style={{ color: "#000548", background: "#2196f3" }} name="UpdateProfile" type="submit" value="UpdateProfile">Update </Button>

                </form>
            </FormWithConstraints>
        );
    }
}

//ReactDOM.render(<Form />, document.getElementById('app'));
