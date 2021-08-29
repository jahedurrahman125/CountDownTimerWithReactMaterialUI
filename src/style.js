import { makeStyles } from "@material-ui/core/styles";
import Img02 from "./Assets/02.jpg";

export default makeStyles((theme) => ({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "15rem"
    },
    card:{
        backgroundImage: `url(${Img02})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: "auto",
        maxWidth: "36rem",
        boxShadow: "3px 6px red"
    },
    cardHeader:{
        border: "3px solid rgb(16, 109, 112)",
        display: "flex",
        color: "white",
        justifyContent: "center",
        textAlign: "center",
    },
    cardBody:{
        display: "flex",
        fontWeight: "bold",
        justifyContent: "center",
        flexWrap: "wrap",
        textAlign: "center",
    },
    bigText:{
        fontWeight: "bold",
        fontSize: "50px",
        lineHeight: 1,
        margin: "30px 35px 0",
        transition: "all .45s ease-in-out",
        color: "white"
    },
    bigTextSpan:{
        color: "white"
    },
    [theme.breakpoints.down('lg')]: {
        height: '100%'
      }
}));