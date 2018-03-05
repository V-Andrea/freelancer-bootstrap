import $ from "jquery";
import 'bootstrap';
require('typeface-archivo-narrow');
require('typeface-archivo-black');
import '../css/main.scss';

import fontawesome from '@fortawesome/fontawesome';
import faIdCard from '@fortawesome/fontawesome-free-solid/faIdCard';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faLaptop from '@fortawesome/fontawesome-free-solid/faLaptop';
import faSpaceShuttle from '@fortawesome/fontawesome-free-solid/faSpaceShuttle';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faPinterestP from '@fortawesome/fontawesome-free-brands/faPinterestP';
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG';

fontawesome.library.add(faIdCard, faCartPlus, faStar, faComments, faEdit, faLaptop, faSpaceShuttle);
fontawesome.library.add(faFacebookF, faInstagram, faPinterestP, faGooglePlusG);