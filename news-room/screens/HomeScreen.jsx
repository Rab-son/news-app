import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { NewsCard } from "../components/NewsCard";

export const HomeScreen = () => {

    const API_KEY = "bab17984868d4f0dbf81e9688650efa6";

    const COUNTRY = 'us';

    const [news, setNews] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetchNews();
    }, []);

    const fetchNews = async() => {
        const newsUrl = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

        try {
            const res = await axios.get(newsUrl);
            setNews(res.data.articles);
            setLoading(false);
        } catch (error){
            console.log('News API Failed to Fetch News:', error);

        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Top Headlines in ${COUNTRY}`}</Text>

            {
                loading ? (
                    <ActivityIndicator
                        size="large"
                        color="red"
                    />
                ) : (
                    <FlatList 
                        data={news}
                        keyExtractor={(item, index) =>index.toString()}
                        renderItem={({item}) => <NewsCard news={item} /> }
                    />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#eee",
    padding: 20

  }
});