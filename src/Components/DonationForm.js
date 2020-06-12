import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

export default function DonationForm(props) {
    // possible steps => payment-commitment, customer-info, stripe-payment
    let [currentStep, setStep] = useState('payment-commitment');
    const classes = useColorlibStepIconStyles();


    return (
        <div className="column">
            <Paper elevation={3} className={"card"}>
                <h1>Fight Hunger Fight Corona</h1>
                <div className="column">
                    <div className="step-indicator">
                        Choose Amount
                    </div>
                    <div className="form-field">
                        <label htmlFor="currency">Currency</label>
                        <select name="currency" id="currency">
                            <option value="usd">US Dollars ($)</option>
                            <option value="gbp">British Pound Sterling (GBP)</option>
                            <option value="eur">Euros (EUR)</option>
                            <option value="chf">Swiss Franc (CHF)</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="male">Male</label><br/>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label htmlFor="female">Female</label><br/>
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
            </Paper>
        </div>
    )
}