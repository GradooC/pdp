import { SoundButtonOptions } from './sound-button';

export const NUM_COLUMNS = 2;

export const options: SoundButtonOptions[] = [
    {
        id: '1',
        title: 'sad trombone',
        color: '#f56420',
        file: require('../assets/sounds/sad.mp3'),
    },
    {
        id: '2',
        title: 'badum tss',
        color: '#7167ce',
        file: require('../assets/sounds/joke.mp3'),
    },
    {
        id: '3',
        title: 'cricket',
        color: '#38a9f0',
        file: require('../assets/sounds/cricket.mp3'),
    },
    {
        id: '4',
        title: 'ding ding',
        color: '#15c534',
        file: require('../assets/sounds/ding.mp3'),
    },
    {
        id: '5',
        title: 'air horn',
        color: '#c8ea53',
        file: require('../assets/sounds/horn.mp3'),
    },
    {
        id: '6',
        title: 'wasted',
        color: '#e9dc09',
        file: require('../assets/sounds/wasted.mp3'),
    },
];
