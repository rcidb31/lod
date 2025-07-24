import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 260,
    },
  },
};

const names = [
  'Pintura interior',
  'Pintura exterior',
  'Revisión eléctrica',
  'Instalación de luminarias',
  'Prueba de enchufes y interruptores',
  'Revisión sanitaria',
  'Instalación de artefactos (lavamanos, WC, ducha)',
  'Sellos y silicona en baños y cocina',
  'Revisión de gasfitería',
  'Prueba de calefón o caldera',
  'Puertas y cerraduras',
  'Ventanas y correderas',
  'Terminaciones de albañilería',
  'Limpieza final de obra',
  'Verificación de planos y manuales entregados',

];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl id="custom-select" sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Trabajos</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}