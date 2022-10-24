import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<Box sx={{ width: '100%' }} className={styles.loader}>
		  <LinearProgress color="inherit" />
		</Box>
	  );
}

export { Loader };