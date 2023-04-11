import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, Typography, Grid, Box, ListItemText, List } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';


const ImprimeVoto = () => {

    const [usuario, setUsuario] = useState({
        password :''
        });
   
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setError(false);
      };
    
    const ValidateBotonesRadio = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
        console.log(value);
        setUsuario(value);
    }

    const EnviarVoto = e => {
        e.preventDefault();
        console.log("Imprime los valores de memoria temporal de usuario", usuario);
    }

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
      function createData(name, PresidenteLuis, PresidenteJuan, VotoBlanco) {
        return { name, PresidenteLuis, PresidenteJuan, VotoBlanco};
      }
      
      const rows = [
        createData('Pedro Miguel–Socio: 5546',),
        createData('María Bernar–Socio: 798465',),
        createData('Esteban Ruiz–Socio: 346',),
        createData('Sonia Marín–Socio: 6506',),
        createData('Juan Manuel – Socio: 5461', 356, 16.0, 49),
      ];

      const classes = useStyles();
    return (
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <form style={style.form}>
                <Box border={1} borderRadius={5}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={12}></Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="38%" margin="auto">
                                <Typography component="h1" variant="h5" style={style.Typography}>
                                    Votacion AIE Asamblea General Extraordinaria Electoral
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="5%" margin="auto">
                                <Avatar style={style.avatar}>
                                    <LockIcon style={style.icon}/>
                                </Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="right">CANDAIE23 (Presidente Luis Cobos)</TableCell>
                                    <TableCell align="right">CANDAIE23 (Presidente Juan Moroto)</TableCell>
                                    <TableCell align="right">VOTO BLANCO </TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.PresidenteLuis}
                                    <Radio
                                        onChange={handleRadioChange}
                                        error={error}
                                        checked={false}
                                        value={value}
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'A' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.PresidenteJuan}
                                    <Radio
                                        onChange={handleRadioChange}
                                        error={error}
                                        checked={false}
                                        value={value}
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'A' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.VotoBlanco}
                                    <Radio
                                        onChange={handleRadioChange}
                                        error={error}
                                        checked={false}
                                        value={value}
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'A' }}
                                        />
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button onClick={EnviarVoto} type="submit" variant="contained" color="primary" style={style.form} >
                                    Enviar Voto
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}></Grid>
                        
                        <Grid item xs={12} md={1}></Grid>
                        <Grid item xs={12} md={5}>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATO PRESIDENTE: LUIS COBOS PAVON (Luis Cobos)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS CONSEJEROS POR LA MODALIDAD DE INTERPRETES" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUZ CASAL PAZ (Luz)" />
                                        <ListItemText primary="NACHO GARCIA VEGA (Nacho Paz)" />
                                        <ListItemText primary="MARIA RODRIGUEZ DEL ALAMO (Maria Toledo)" />
                                        <ListItemText primary="CARLOS JAVIER CRESPO GOÑI (Revolver)" />
                                        <ListItemText primary="ANA Mº ALIAS VEGA (Pasion Vega)" />
                                        <ListItemText primary="BLAS CANTO MORENO (Blas Canto)"/>
                                        <ListItemText primary="GERARDO NUÑEZ DIAS" />
                                        <ListItemText primary="ALBA CARMONA GARCIA (Las Migas)" />
                                        <ListItemText primary="JUAN LUIS CALCETEIRO RUIZ (Canntores de Hispalis)" />
                                        <ListItemText primary="MONSERRAT PRATDESABA RIBAS (Big Mama)" />
                                        <ListItemText primary="JAVIER CAMPILLO REINO (Tam Tam Go)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS POR LA MODALIDAD DE EJECUTANTES" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUIS MENDO MUÑOZ (Suburbano)" />
                                        <ListItemText primary="JAVIER CUBEDO ALICART" />
                                        <ListItemText primary="MONICA RAMOS PALOMO (Monica Moss)" />
                                        <ListItemText primary="JOSE SANCHEZ LLANES (Pepe Sanchez)" />
                                        <ListItemText primary="LAURA SIMO FABREGAT (Laura Simo)" />
                                        <ListItemText primary="ANTONI MAS I BOU"/>
                                        <ListItemText primary="JOSE LUIS NIETO GARCIA" />
                                        <ListItemText primary="SALVADOR BARBERA JUANES" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS SUPLENTES:" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="(INTERPRETES)" />
                                        <ListItemText primary="MONSERRAT TERUEL MIR(Mone)" />
                                        <ListItemText primary="XACOBE MARTINEZ ANTELO" />
                                        <ListItemText primary="ENRIQUE PERDOMO CASTRO (Kike Perdomo)" />
                                        <ListItemText primary="(EJECUTANTES)" />
                                        <ListItemText primary="DAVID JUAN MORALES MONTANES" />
                                        <ListItemText primary="CLAUDIO MIGUEL IANNI" />
                                    </List>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATO PRESIDENTE: LUIS COBOS PAVON (Luis Cobos)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS CONSEJEROS POR LA MODALIDAD DE INTERPRETES" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUZ CASAL PAZ (Luz)" />
                                        <ListItemText primary="NACHO GARCIA VEGA (Nacho Paz)" />
                                        <ListItemText primary="MARIA RODRIGUEZ DEL ALAMO (Maria Toledo)" />
                                        <ListItemText primary="CARLOS JAVIER CRESPO GOÑI (Revolver)" />
                                        <ListItemText primary="ANA Mº ALIAS VEGA (Pasion Vega)" />
                                        <ListItemText primary="BLAS CANTO MORENO (Blas Canto)"/>
                                        <ListItemText primary="GERARDO NUÑEZ DIAS" />
                                        <ListItemText primary="ALBA CARMONA GARCIA (Las Migas)" />
                                        <ListItemText primary="JUAN LUIS CALCETEIRO RUIZ (Canntores de Hispalis)" />
                                        <ListItemText primary="MONSERRAT PRATDESABA RIBAS (Big Mama)" />
                                        <ListItemText primary="JAVIER CAMPILLO REINO (Tam Tam Go)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                <List>
                                    <ListItemText primary="CANDIDATOS POR LA MODALIDAD DE EJECUTANTES" />
                                </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUIS MENDO MUÑOZ (Suburbano)" />
                                        <ListItemText primary="JAVIER CUBEDO ALICART" />
                                        <ListItemText primary="MONICA RAMOS PALOMO (Monica Moss)" />
                                        <ListItemText primary="JOSE SANCHEZ LLANES (Pepe Sanchez)" />
                                        <ListItemText primary="LAURA SIMO FABREGAT (Laura Simo)" />
                                        <ListItemText primary="ANTONI MAS I BOU"/>
                                        <ListItemText primary="JOSE LUIS NIETO GARCIA" />
                                        <ListItemText primary="SALVADOR BARBERA JUANES" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                <List>
                                    <ListItemText primary="CANDIDATOS SUPLENTES:" />
                                </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="(INTERPRETES)" />
                                        <ListItemText primary="MONSERRAT TERUEL MIR(Mone)" />
                                        <ListItemText primary="XACOBE MARTINEZ ANTELO" />
                                        <ListItemText primary="ENRIQUE PERDOMO CASTRO (Kike Perdomo)" />
                                        <ListItemText primary="(EJECUTANTES)" />
                                        <ListItemText primary="DAVID JUAN MORALES MONTANES" />
                                        <ListItemText primary="CLAUDIO MIGUEL IANNI" />
                                    </List>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={1}></Grid>

                        <Grid item xs={12} md={12}></Grid>

                    </Grid>
                </Box>
            </form>
        </div>
    </Container>
    );
};

export default ImprimeVoto; 