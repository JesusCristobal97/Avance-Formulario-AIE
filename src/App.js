import React from "react";
import theme from "./theme/theme";
import { ThemeProvider as MuithemeProvider } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import Acceso from "./componente/seguridad/Acceso";
import VotoDelegado from "./componente/seguridad/VotoDelegado";
import Enviar from "./componente/seguridad/Enviar"
import BotonesRadio from "./componente/seguridad/BotonesRadio"
import ImprimeVoto from "./componente/seguridad/ImprimeVoto";
import JuegoCerrado from "./componente/seguridad/JuegoCerrado";
import JuegoIniciado from "./componente/seguridad/JuegoIniciado";

function App() {

return (
<React.Fragment>
      <MuithemeProvider theme={theme}>
        <Grid container>
        <JuegoCerrado/>
        <JuegoIniciado/>

          
        </Grid>
      </MuithemeProvider>
    </React.Fragment>
  );
}

export default App;

//<Acceso/>
//<VotoDelegado/>
//<Enviar/>
//<ImprimeVoto/>
//<BotonesRadio/>