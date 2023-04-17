import React from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, Typography, Grid, Box, List, ListItemText } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Swal from 'sweetalert2'


const VotoDelegado = () => {

    const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Usted lleva voto delegado, desea aplicar la misma opcion de voto a todos sus delegados',
            text: "Presione confirmar si esta deacuerdo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Confirmado',
                'Su voto ha sido enviado.',
                'success'
            )
            } else if (
              /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Puede revisar una vez mas',
                'error'
            )
            }
        });

    return (
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <form style={style.form}>
                <Box border={1} borderRadius={5}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={12}></Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="38%" margin="auto">
                                <Typography component="h1" variant="h5">
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
                            <Box width="25%" margin="auto">
                                <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="Juan Manuel - Socio: 5461" />
                                        <ListItemText primary="Votos i : 45" />
                                        <ListItemText primary="Votos e : 70" />
                                        <ListItemText primary="Voto delegado : 180" />                                   
                                    </List>
                                </Typography>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button onClick={()=>swalWithBootstrapButtons()} type="submit" variant="contained" color="primary" style={style.form} >
                                    Enviar Voto
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}></Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    </Container>
    );
};

export default VotoDelegado; 