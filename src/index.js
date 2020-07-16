import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import {ptBR} from '@material-ui/core/locale';
import 'typeface-roboto';

import App from './pages/App';
import {LoadingProvider} from 'Contexts/loading';
import Loading from 'Components/CustomLoading';
import {MessageProvider} from 'Contexts/message';
import Routes from './routes';
import registrarSW from './serviceWorker';

registrarSW();

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f50b5'
        }
    },
    status: {
        danger: 'orange',
    },
},ptBR);

theme = responsiveFontSizes(theme);

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <Loading>
                    <MessageProvider>
                        <App>
                            {/*<Routes/>*/}
                        </App>
                    </MessageProvider>
                </Loading>
            </LoadingProvider>
        </ThemeProvider>
    </BrowserRouter>
    ,
    document.getElementById('container')
);