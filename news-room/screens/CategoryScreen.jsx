import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { NewsCard } from "../components/NewsCard";

export const CategoryScreen = ({route}) => {

    const API_KEY = "bab17984868d4f0dbf81e9688650efa6";

    const COUNTRY = 'us';

    const category = route.params?.category || 'home';

    const [news, setNews] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetchNews();
    }, []);

    const fetchNews = async() => {
        const newsUrl = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`;

        try {
            const res = await axios.get(newsUrl);
            setNews(res.data.articles);
            setLoading(false);
        } catch (error){
            console.log(error);

        }

        if(loading){
            return <ActivityIndicator size="large" color="blue" />;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {category.toUpperCase()} News
            </Text>

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
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#eee",
    padding: 20

  }
});