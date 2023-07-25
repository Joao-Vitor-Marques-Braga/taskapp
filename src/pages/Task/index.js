import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from "react-native";

import  database from '../../config/firebaseconfig'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'

export default function Task(){

    const [task, setTask] = useState([])

    useEffect(() => {
            database.
         })
         setTask(list)
        })
    }, [])

    return(
        <View>
            <Text>Tela Task</Text>
        </View>
    )
}