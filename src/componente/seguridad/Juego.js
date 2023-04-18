import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, TextField, Typography, Grid, Box, Paper } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';



const Juego = () => {

    const [data,setData]=useState('');
    
    const handleChange =(e,editor)=>{
        setData(editor.getData());
    }

    const [age1, setAge1] = React.useState('');
    const [age2, setAge2] = React.useState('');

    const handleChangeSelect1 = (event) => {
        setAge1(event.target.value);
    };

    const handleChangeSelect2 = (event) => {
        setAge2(event.target.value);
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

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
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego en espera
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego finalizado
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Titulo
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Logo
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    id="Titulo"
                                    required
                                    name="Titulo"
                                    variant="outlined" 
                                    type="text" 
                                    label="Ingrese su titulo" 
                                    helperText="Ingrese un titulo valido"
                                    fullWidth 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                        id="Logo"
                                        required
                                        name="Logo"
                                        variant="outlined" 
                                        type="text" 
                                        label="Ingrese su Logo" 
                                        helperText="Ingrese un logo valido"
                                        fullWidth 
                                        />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(e,editor)=>{handleChange(e,editor)}}/>
                                <div>
                                    {data}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Campo para Logo
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Video
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField 
                                        id="Titulo"
                                        required
                                        name="Titulo"
                                        variant="outlined" 
                                        type="text" 
                                        label="Ingrese su titulo" 
                                        helperText="Ingrese un titulo valido"
                                        fullWidth 
                                        />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                        Respuesta Correcta
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                        Respuesta Incorrecta
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age1}
                                    onChange={handleChangeSelect1}
                                    fullWidth
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age2}
                                    onChange={handleChangeSelect2}
                                    fullWidth
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography component="h1" variant="h6">
                                        Tipo ingreso
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Codigo
                                </Typography>
                                <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChangeRadio}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                                label="Codigo"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Codigo y Login
                                </Typography>
                                <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChangeRadio}
                                value="b"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'B' }}
                                label="Codigo y Login"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </div>
    </Container>
    );
};

export default Juego; 

