import { AppProps } from 'next/app';
import { FC } from 'react';

import Tina from '~/.tina/components/TinaDynamicProvider.js';


const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Tina>
            <Component {...pageProps} />
        </Tina>
    );
};

export default App;
