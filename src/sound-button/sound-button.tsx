import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { NUM_COLUMNS } from '../constants';
import { SoundButtonOptions } from './types';

const loadSound = async (soundObject: Audio.Sound, file: number) => {
    try {
        await soundObject.loadAsync(file);
        await soundObject.setVolumeAsync(1);
    } catch (error) {
        console.log(error);
    }
};

type SoundButtonProps = {
    options: SoundButtonOptions;
};

export const SoundButton: React.FC<SoundButtonProps> = ({ options }) => {
    const soundObject = new Audio.Sound();

    React.useEffect(() => {
        loadSound(soundObject, options.file);
    }, []);

    const handlePressIn = async () => {
        await soundObject.setIsLoopingAsync(true);
        await soundObject.playAsync();
    };

    const handlePressOut = async () => {
        await soundObject.stopAsync();
        await soundObject.setIsLoopingAsync(false);
    };

    const handlePress = async () => {
        await soundObject.stopAsync();
        await soundObject.playAsync();
    };

    return (
        <TouchableOpacity
            // onPressIn={handlePressIn}
            // onPressOut={handlePressOut}
            onPress={handlePress}
            style={[styles.soundButton, { backgroundColor: options.color }]}
        >
            <Text style={styles.soundButtonText}>{options.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 5,
        backgroundColor: 'black',
    },
    soundButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        flex: 1 / NUM_COLUMNS,
        margin: 5,
        borderRadius: 10,
    },
    soundButtonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'DM Mono',
    },
});
