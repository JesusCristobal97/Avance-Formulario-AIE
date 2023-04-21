import {  List,ListItem, ListItemText,ListItemIcon,Radio } from "@material-ui/core";
import React,{ useState} from "react";
import delegados from "./delegados.json";
import question from "./question.json";
import { useEffect } from "react";

const Vote = () =>{
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [ answers, setAnswers ] = useState([]);
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    useEffect(() => {
        setAnswers(question[0].lstItem);
    }, [true])
    

    return( 
            <List key={Math.random}>
                    <div>
                        {question[0].lstItem.map((val) => {
                            return(
                                <label>{val.answer}</label>
                            )
                        
                        })}

                        {delegados.map((value) => {
                            return(
                                <ListItem key={value}   dense button  >
                                    <ListItemText primary={value.username} />
                                    <ListItemIcon>
                                        <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="B"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />
                                    </ListItemIcon>
                                    <ListItemIcon>
                                        <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="C"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />
                                    </ListItemIcon>
                                    <ListItemIcon>
                                        <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="D"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                            />
                                    </ListItemIcon>
                                </ListItem>
                            )
                        })}
                    </div>
            </List> 
    )
}

export default Vote;