import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, TextField, Typography, Grid, Box } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';


const JuegoIniciado = () => {

    const [data,setData]=useState('');
    
    const handleChange =(e,editor)=>{
        setData(editor.getData());
    }


    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego iniciado
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

export default JuegoIniciado; 