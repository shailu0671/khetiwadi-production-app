import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Colors } from "../../constants";
import moment from "moment";
import Header from "../../components/Typography/Header";
import TouchableScale from "react-native-touchable-scale";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MandiCard from "../../components/Typography/MandiCard";
import { Grid } from "react-native-animated-spinkit";
import { FetchMandi, FetchState, FetchTages } from "../../config/Urls";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import { getMandiList } from "../../api/mandi";

export default function HomeScreen({ navigation }) {
  const [tages, setTages] = useState([]);
  const [isloadingTages, setisloadingTages] = useState(true);

  const [all_state, setAllState] = useState([]);
  const [isloadingAll_state, setisloadingAll_state] = useState(true);

  const [mandis, setMandis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMandis();
  }, []);

  const fetchMandis = async () => {
    try {
      const data = await getMandiList();
      setMandis(Array.isArray(data) ? data : [data]); // handles both array and single object
    } catch (error) {
    //   console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get(FetchTages)
      .then(function (response) {
        // handle success
        setTages(response.data);
        setisloadingTages(false);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
    axios
      .get(FetchState)
      .then(function (response) {
        // handle success
        setAllState(response.data);
        setisloadingAll_state(false);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const randerMandi = ({ item }) => {
    let views = item.views;
    if (views > 999 && views < 99999) {
      views = (views / 1000).toFixed(2) + " K"; // convert to K for number from > 1000 < 1 million
    } else if (views > 100000 && views < 1000000) {
      views = (views / 100000).toFixed(2) + " Lakh"; // convert to M for number from > 1 million
    } else if (views < 900) {
    } else if (views > 1000000) {
      views = (views / 1000000).toFixed(2) + " Million"; // convert to M for number from > 1 million
    } else if (views < 900) {
      views = views; // if value < 1000, nothing to do
    }

    return (
      <MandiCard
        nav={() => navigation.navigate("Mandi Detail", { mandi: item })}
        item={item}
        mandi_name={item.mandi_name || item.city_name}
        city_name={item.city_name}
        views={views + " Views"}
        add_date={item.add_date}
        id={item.id}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white }}>
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
          }}
        >
          <Header
            HeaderTitle={"Khetiwadi"}
            Day={moment(new Date()).format("dddd DD MMMM")}
          />
          <TouchableScale
            onPress={() => navigation.navigate("Help")}
            style={{ justifyContent: "flex-end" }}
          >
            <Entypo
              name="help-with-circle"
              height={40}
              width={50}
              style={[
                styles.headingText,
                {
                  paddingRight: 20,
                  paddingBottom: 10,
                  color: Colors.Blue[600],
                },
              ]}
            />
          </TouchableScale>
        </View>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>🌾 Khetiwadi Mandi Bhav</Text>
            <Text style={styles.subtitle}>Your mandi rates, crops & more!</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Mandis")}
          >
            <Text style={styles.buttonText}>View Mandi Bhav</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate("Crops")}
          >
            <Text style={styles.secondaryButtonText}>Explore Crops</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={[styles.text_center, { height: 300 }]}>
            <Grid color={Colors.Red[500]} size={50} />
          </View>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={mandis}
            //   extraData={this.state}
            keyExtractor={mandis.id}
            renderItem={randerMandi}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text_center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  date: {
    fontSize: 13,
    color: Colors.Zinc["400"],
    backgroundColor: Colors.white,
    fontWeight: "600",
    paddingLeft: 10,
    paddingTop: 28,
    textTransform: "uppercase",
  },
  headingText: {
    fontSize: 34,
    color: Colors.Gray["900"],
    fontWeight: "bold",
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8fff4",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  secondaryButtonText: {
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
  },
});
