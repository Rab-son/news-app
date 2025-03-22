import { StyleSheet, Image, Text, View } from "react-native"

export const NewsCard = (news) => {
    return (
        <View style={styles.card}>
            <Image 
                style={styles.img}
                source={{ uri: news.news.urlToImage }}/>
            <Text style={styles.newsTitle}>
                {news.news.title}
            </Text>
            <Text style={styles.newsDescription}>
                {news.news.description}
            </Text>
            <Text style={styles.newsAuthor}>
                {news.news.author}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#eee"
  },
  img: {
    height: 300,
    width: "100%",
    borderRadius: 3,
    marginBottom: 10
  },
  newsTitle: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 15
  },
  newsAuthor: {
    fontStyle: "italic",
    fontWeight: "600"
  }
});