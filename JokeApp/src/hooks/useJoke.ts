import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_KEYS } from '../constant/keys';
import { JOKE_CONTENT } from '../datasource/jokeContent';

type TAction = 'like' | 'dislike';
const useJoke = () => {
    const [isShow, setIsShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const checkDisplayJoke = async () => {
        try {
            const isFisnish = await AsyncStorage.getItem(ASYNC_KEYS.isFisnish);
            const currentJokeId = await AsyncStorage.getItem(ASYNC_KEYS.currentJoke);
            const currentJokeIndex = JOKE_CONTENT.findIndex(joke => joke.id === currentJokeId);

            if (!isFisnish) {
                setIsShow(true);
                setCurrentIndex(Math.max(0, currentJokeIndex));
            }
        } catch (error) {
            console.log(`error`, error);
        }
    };
    const onPressButton = (action: TAction) => {
        const newIndex = currentIndex + 1;
        if (!JOKE_CONTENT[newIndex]?.id) {
            /** not available new joke */
            setIsShow(false);
            AsyncStorage.setItem(ASYNC_KEYS.isFisnish, 'true');
        } else {
            /** display next joke and save joke vote */
            setCurrentIndex(newIndex);
            AsyncStorage.setItem(ASYNC_KEYS.currentJoke, JOKE_CONTENT[newIndex].id);
            AsyncStorage.mergeItem(
                ASYNC_KEYS.jokeVote,
                JSON.stringify({ [JOKE_CONTENT[currentIndex].id]: action })
            );
        }
    };

    useEffect(() => {
        checkDisplayJoke();
    }, []);

    return {
        isShow,
        currentIndex,
        onPressButton,
    };
};

export default useJoke;
