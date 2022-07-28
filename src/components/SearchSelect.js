import {useState, useEffect} from 'react';

/**
 * 
 * @param {*} props 
 * - type
 * - onChange
 * @returns 
 */

function SearchSelect(props){
    const [type, setType] = useState('1');

    useEffect(() => {
        setType(props.type);
    }, props.type)
    
    
    return (
        <select className="form-select" id="type" value={type} onChange={props.onChange}>
            <option value="1">Balance</option>
            <option value="2">Transaction</option>
            <option value="3">Contract</option>
        </select>
    )
}

export default SearchSelect;