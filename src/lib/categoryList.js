import { automotiveIcon } from "@/components/AllSvgs";
import DiningIcon from '@mui/icons-material/Dining';
import FlightIcon from '@mui/icons-material/Flight';
export const categories_array = [
  {
    name: 'Travel',
    icon: <FlightIcon color='success' fontSize='medium'/>,
  },
  {
    name: 'Dining',
    icon: <DiningIcon color='success' fontSize='medium' />,
  },
  {
    name: 'Automotive',
    icon: automotiveIcon(),
  },
  {
    name: 'Grocery',
    icon: '',
  },
  {
    name: 'Healthcare',
    icon: '',
  },
  {
    name: 'Online',
    icon: '',
  },
  {
    name: 'Subscription',
    icon: '',
  },
  {
    name: 'Grooming',
    icon: '',
  },
  {
    name: 'Other',
    icon: '',
  },
];
