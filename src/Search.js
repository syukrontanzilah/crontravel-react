import React, {useState} from 'react'
import './Search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import PeopleIcon from '@material-ui/icons/People'
import { Button } from '@material-ui/core';

function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date());

const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
}

function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate)
}

    return (
        <div className="search">
          <DateRangePicker
          ranges={
              [selectionRange]}
              onChange={handleSelect}
          />
          <h2>
              Number of guests
             <PeopleIcon />
          </h2>
          <input 
          min={0}
          max={100}
          defaultValue={1}
          type="number"
          />
          <Button>
              Search CRONTRAVEL
          </Button>
        
        </div>
    )
}

export default Search