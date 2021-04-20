import { createMuiTheme} from '@material-ui/core/styles';

const arcBlue = "#0b72B9";
const arcOrange = "#FF2b60";

export default createMuiTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        }
    }
})