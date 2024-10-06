import calender from '../assets/calender.svg';
import crypto from '../assets/crypto.svg';
import dataTable from '../assets/data-table.svg';
import file from '../assets/file.svg';
import message from '../assets/message.svg';
import product from '../assets/product.svg';
import search from '../assets/search.svg';

const NAV_ITEMS = [
  {title: 'Search', icon: search},
  {title: 'Data Table', icon: dataTable},
  {title: 'Product', icon: product},
  {title: 'Analytics', icon: file},
  {title: 'Calender', icon: calender},
  {title: 'Messanger', icon: message},
  {title: 'Crypto', icon: crypto},
];

const STATUS_COLOR = {
  Free: '#0064FF',
  Busy: '#F63F3F',
  Workin: '#404D61',
  Working: '#404D61',
  OnVacation: '#F9A348',
};

export {NAV_ITEMS, STATUS_COLOR};
