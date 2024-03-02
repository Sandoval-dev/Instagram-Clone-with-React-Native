import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native"
import { Heart, Logo, Messenger, Plus } from "../../../icons"

function Header() {

    return (
        <View style={styles.header}>
            <Logo size={104} fill="#000" />
            <View style={styles.actions}>
                <TouchableOpacity activeOpacity="0.6" >
                    <Plus size={24} fill="#000" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity="0.6" style={styles.buttons}>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Heart size={24} fill="#000" />

                </TouchableOpacity>
                <TouchableOpacity activeOpacity="0.6" style={styles.buttons}>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Messenger size={24} fill="#000" />
                </TouchableOpacity>


            </View>


        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    actions: {
        flexDirection: 'row',

    },

    buttons: {
        marginLeft: 20
    },
    dot: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "#FE3650",
        width: 9,
        height: 9,
        borderRadius: 10,
        zIndex: 2
    },
    dotContainer: {
        zIndex: 2,
        width: 11,
        height: 11,
        backgroundColor: "#fff",
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    }


})