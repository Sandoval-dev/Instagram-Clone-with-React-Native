import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableOpacityBase, TouchableHighlight, ScrollView } from "react-native"
import { Comment, Dots, Heart, Save, SendDm } from "../../icons"
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)



function Post({ post }) {

    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: post.user.avatar }}
                    />
                    <Text style={styles.title}>{post.user.name}</Text>
                </View>
                <View>
                    <Dots size={24} fill="#262626" />
                </View>
            </View>
            <Image
                style={styles.postImage}
                source={{ uri: post.image }}
            />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action} activeOpacity="0.7">
                            <Heart size={24} fill="#262626" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity="0.7">
                            <Comment size={24} fill="#262626" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity="0.7">
                            <SendDm size={24} fill="#262626" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Save size={24} fill="#262626" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 3 }}>
                    <Text style={styles.likes}>{post.likes} beğenme</Text>
                </View>
                <ReadMore numberOfLines={2}
                    seeMoreText="devamı"
                    seeLessText="kısalt"
                    wrapperStyle={{
                      marginBottom:2
                    }}
                    seeMoreStyle={{
                        color: "#999"
                    }}
                    seeLessStyle={{
                        color: "#999"
                    }}
                >
                    <Text style={styles.userName}>{post.user.name}</Text>
                    {`  `}
                    {post.description}
                </ReadMore>
                {
                    post.comments > 0 && (
                        <TouchableOpacity style={{ paddingVertical: 7 }} activeOpacity="0.7">
                            <Text style={{ color: "#999" }}>
                                {post.comments} yorumun tümünü gör
                            </Text>
                        </TouchableOpacity>
                    )
                }
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: "#999" }}>{dayjs(post.date).fromNow()}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 8 }}> Çevirisini Gör</Text>
                </View>
            </View>

        </View>
    )

}

export default Post

const styles = StyleSheet.create({

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 12,
        paddingRight: 14
    },
    avatar: {
        width: 30,
        height: 30,
        borderColor: '#fff',
        borderRadius: 30
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    title: {
        fontWeight: '700',
        fontSize: 13
    },
    postImage: {
        width: 400,
        height: 400
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    leftActions: {
        flexDirection: 'row',
    },
    action: {
        marginRight: 10
    },
    likes: {
        fontWeight: '600',
    },
    content: {
        paddingHorizontal: 15

    },
    userName: {
        fontWeight: '600',

    },
    post:{
      marginBottom:30
    }


})