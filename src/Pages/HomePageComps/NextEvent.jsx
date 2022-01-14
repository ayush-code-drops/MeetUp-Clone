import React from 'react'

import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';

import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';

import FmdGoodIcon from '@mui/icons-material/FmdGood';

import MenuItem from '@mui/material/MenuItem';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import LocalizationProvider from '@mui/lab/LocalizationProvider';

import TimePicker from '@mui/lab/TimePicker';

import DateTimePicker from '@mui/lab/DateTimePicker';

import { Button } from '@mui/material';

const currencies = [

{

value: 'In Person',

label: 'In Person',

},

{

value: 'Online',

label: 'Online',

},

{

value: 'In Person + Online',

label: 'In Person + Online',

},

];

export default function NextEvent() {

const [currency, setCurrency] = React.useState('In Person');

const [value, setValue] = React.useState(new Date('2022-01-15T21:11:54'));

const handleChange2 = (newValue) => {

setValue(newValue);

};

const handleChange = (event) => {

setCurrency(event.target.value);

};

return (

<div>

<h1>Find Your Next Event:</h1>

<TextField sx={{m:1}}

id="input-with-icon-textfield"

placeholder='Find your next event'

InputProps={{

startAdornment: (

<InputAdornment position="start">

<SearchIcon />

</InputAdornment>

),

}}

variant="outlined"

/>

<TextField sx={{m:1}}

id="input-with-icon-textfield"

placeholder='Location'

InputProps={{

startAdornment: (

<InputAdornment position="start">

<FmdGoodIcon/>

</InputAdornment>

),

}}

variant="outlined"

/>

<TextField sx={{marginRight:'15px',width:'39%'}}

id="outlined-select-currency"

select

value={currency}

onChange={handleChange}

>

{currencies.map((option) => (

<MenuItem key={option.value} value={option.value}>

{option.label}

</MenuItem>

))}

</TextField>

<LocalizationProvider dateAdapter={AdapterDateFns}>

<DesktopDatePicker

inputFormat="MM/dd/yyyy"

value={value}

onChange={handleChange2}

renderInput={(params) => <TextField {...params} />}

/>

<Button sx={{ backgroundColor: '#F65858',width:'79%',padding:'10px',m:2,borderRadius:'12px',fontSize:'18px' }} variant="contained" >

Search</Button>

</LocalizationProvider>

</div>

)

}