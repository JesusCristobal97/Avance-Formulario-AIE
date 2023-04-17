import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, TextField, Typography, Grid, Box } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';


const JuegoCerrado = () => {

    const [data,setData]=useState('');
    
    const handleChange =(e,editor)=>{
        setData(editor.getData());
    }
    ClassicEditor
    .create( document.querySelector( '#editor' ), {
        // Load the plugin.
        plugins: [ SelectAll, /* ... */ ],

        // Display the "Select all" button in the toolbar.
        toolbar: [ 'selectAll', /* ... */ ],
    } )
    .then( /* ... */ )
    .catch( /* ... */ );

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego cerrado
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
        </div>
    </Container>
    );
};

export default JuegoCerrado; 

