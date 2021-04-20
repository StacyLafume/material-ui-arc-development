import { createMuiTheme} from '@material-ui/core/styles';

const arcBlue = "#ffb2b2";
const arcOrange = "#FF2b60";

export default createMuiTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcBlue}`
        }
    }
})