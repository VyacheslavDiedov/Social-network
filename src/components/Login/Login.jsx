import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import stale from "./../../common/FormControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name = {"email"}
                       validate={[required]}
                       component = {Input}/>
            </div>
            <div>
                <Field placeholder={"password"} name = {"password"}  validate={[required]} component = {Input}
                       type ={"password"}/>
            </div>
            <div>
                <Field  component = {Input} type={"checkbox"} name = {"remebrerMe"}/> remebrer me
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <div>
                <Field placeholder={"Symbols from image"} name = {"captcha"}  validate={[required]} component = {Input}/>
            </div>}


            {error && <div className={stale.formControlSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to ={"/profile"}/>
    }
    return <div>
        <LoginReduxForm onSubmit = {onSubmit} captchaUrl = {props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,

    })

export default connect(mapStateToProps, { login })(Login);