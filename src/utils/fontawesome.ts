import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUser, faFlag } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


library.add(faPhone, faUser, faFlag, faFacebookF, faArrowRight, faArrowUp);

export default FontAwesomeIcon;