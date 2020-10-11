import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    ListRenderItem,
} from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { SoundButton, SoundButtonOptions } from './src/sound-button';
import { NUM_COLUMNS, options } from "./src/constants";

const renderItem: ListRenderItem<SoundButtonOptions> = ({ item }) => (
    <SoundButton options={item} />
);

export default function App() {
    let [fontsLoaded] = useFonts({
        'DM Mono': require('./assets/fonts/DMMono-MediumItalic.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar style="light" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={options}
                    renderItem={renderItem}
                    numColumns={NUM_COLUMNS}
                ></FlatList>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 5,
        backgroundColor: 'black',
    },
});
