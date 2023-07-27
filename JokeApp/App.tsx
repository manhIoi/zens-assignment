import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Button } from './src/components/Button';
import { Colors, Spacing } from './src/themes';
import { FontSize } from './src/themes/fontSize';
import useJoke from './src/hooks/useJoke';
import { JOKE_CONTENT } from './src/datasource/jokeContent';

const App = () => {
    const { isShow, currentIndex, onPressButton } = useJoke();

    const content = isShow
        ? JOKE_CONTENT[currentIndex].content
        : "That's all the jokes for today! Come back another day!";

    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <View style={{ height: Spacing.XL }} />
                <Text style={styles.headerTitle}>A joke a day keeps the doctor away</Text>
                <Text style={styles.headerSubTitle}>
                    If you joke wrong way, your teeth have to pay. (Serious)
                </Text>
            </View>
        );
    };

    const renderBody = () => {
        return (
            <View style={styles.body}>
                <View style={styles.jokeContainer}>
                    <Text style={styles.jokeContent}>{content}</Text>
                </View>
                {isShow ? (
                    <View style={styles.buttons}>
                        <Button
                            title={'This is Funny'}
                            type="secondary"
                            onPress={() => onPressButton('like')}
                        />
                        <Button
                            title={'This is not Funny'}
                            onPress={() => onPressButton('dislike')}
                        />
                    </View>
                ) : null}
            </View>
        );
    };

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerContent}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis cum, quo
                    totam perferendis quae dolores aliquam quia placeat aperiam quidem laborum
                    maiores possimus fuga laudantium, numquam maxime veritatis debitis ipsum.
                </Text>
                <Text style={styles.footerCopyright}>Copyright 2021 HLS</Text>
            </View>
        );
    };
    return (
        <View style={styles.screen}>
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    header: {
        padding: Spacing.XXL,
        backgroundColor: Colors.primary,
    },
    headerTitle: {
        color: Colors.black_01,
        fontSize: FontSize.h3,
        marginBottom: Spacing.L,
    },
    headerSubTitle: {
        color: Colors.black_01,
        fontSize: FontSize.title,
    },
    body: {
        flex: 1,
        backgroundColor: Colors.black_01,
        paddingVertical: Spacing.XXL,
    },
    jokeContainer: {
        flex: 1,
        padding: Spacing.XL,
    },
    jokeContent: {
        fontSize: FontSize.subTitle,
        color: Colors.black_17,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    footer: {
        alignItems: 'center',
        padding: Spacing.L,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.black_07,
    },
    footerContent: {
        fontSize: FontSize.title,
        color: Colors.black_11,
        textAlign: 'center',
    },
    footerCopyright: {
        fontSize: FontSize.h4,
        color: Colors.black_17,
        marginTop: Spacing.XL,
    },
});

export default App;
