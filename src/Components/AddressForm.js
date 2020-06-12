import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";

const useSelectFieldStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function AddressForm() {
    let [currency, setCurrency] = useState('usd');
    let [amount, setAmount] = useState('60');
    let classes = useSelectFieldStyles();
    const amounts = [[20, 1], [60, 3], [120, 6], [240, 12]];
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Choose An Amount
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="currency">Choose Currency</InputLabel>
                <Select
                    native
                    value={currency}
                    onChange={(e) => {
                        setCurrency(e.target.value)
                    }}
                    inputProps={{
                        name: 'currency',
                        id: 'currency',
                    }}>
                    <option value={'usd'}>US Dollars (USD)</option>
                    <option value={'eur'}>Euros (EUR)</option>
                    <option value={'gbp'}>British Pound Sterling (GBP)</option>
                    <option value={'chf'}>Swiss Franc (CHF)</option>
                </Select>
            </FormControl>
            <RadioGroup aria-label="amount" name="amount" value={amount}
                        onChange={(event => setAmount(event.target.value))}>

                {amounts.map(([_amount, familySize]) => (
                    <Box m={2}>
                        <FormControlLabel value={`${_amount}`} control={<Radio name={"amount"}/>}
                                          label={
                                              <div>
                                                  <Typography variant="h6"
                                                              gutterTop>${_amount}</Typography>
                                                  <span>Support {familySize} {familySize === 1 ? "family" : "families"}. ${_amount} supports {familySize} {familySize === 1 ? "family" : "families"} with 14 days of essential food & medical supplies.</span>
                                              </div>
                                          }/>
                    </Box>))}
                <Box m={2}>
                    <FormControlLabel
                        value={'20$'}
                        checked={amount === '20$'}   //Also this
                        control={<Radio name="amount"/>}
                        label={
                            <TextField
                                id="standard-bare"
                                defaultValue="0"
                                type={"number"}
                                helperText={"Choose custom amount"}
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            $
                                        </InputAdornment>
                                    ),
                                }}
                                size={"small"}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        }
                    />
                </Box>
            </RadioGroup>

        </React.Fragment>
    );
}