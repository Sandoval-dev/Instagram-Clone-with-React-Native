import { Dimensions, Image } from "react-native";

function FitImage({src}){

    const width=Dimensions.get('window').width
    const ratio =1080/width
    const height = 607/ratio

    return (
        <Image
        style={{
            width:width,
            height:height
        }}
         sourcre={{src}}/>
    )
}

export default FitImage