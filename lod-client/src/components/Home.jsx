import { useNavigate } from 'react-router-dom';   // Importamos useNavigate para la navegación 
import '../assets/module.css'; // modulo para darle estilo. 
import Clima from './Clima';   // modulo componente clima. 
import BasicButtons from './BasicButton'; // componente de botones 
import { Stack,Paper,Typography,Divider} from '@mui/material'; // estilos de material ui. 
import HomeIcon from '@mui/icons-material/Home'; // iconos material Ui. 
import ApartmentIcon from '@mui/icons-material/Apartment';



function Home() {
  const navigate = useNavigate();  //manejo de estado , al hacer click nos dirije al componente seleccionado. 

  const handleCasaClick = () => {
    navigate('/formulario-casa');
  } 

  const handlEdificioClick = () => {
    navigate('/formulario-edificio');

  };

  return (
 <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
   <Typography variant="h4" gutterBottom>Libro de Obras Digital</Typography>
   <Typography variant="h6" gutterBottom>Bienvenido</Typography>
   <Typography variant="body1">Selecciona el tipo de proyecto:</Typography>

   <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
    <BasicButtons startIcon ={<HomeIcon />} onClick={handleCasaClick}>Casa</BasicButtons>
    <BasicButtons startIcon ={<ApartmentIcon/>} onClick={handlEdificioClick}>Edificio</BasicButtons>
   </Stack>

   <Divider sx={{ my: 3 }} />

   <Clima />
 </Paper> 

  );
}

export default Home;


