import { createTheme, MantineProvider } from '@mantine/core';
import styles from './RootLayout.module.scss'
const theme = createTheme({});
export const RootLayout = ({children}: {children: React.ReactNode}) => {
    return <MantineProvider theme={theme}>
            <div className={styles.wrapper}>
                {children}
            </div>
        </MantineProvider>
}