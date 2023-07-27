import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.jokeContent}>{content}</Text>
                    </ScrollView>
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
                    This app is created as part of HIsolutions program. The materials contained on
                    this website are provided for informational purposes only and are not intended
                    to be a substitute for professional medical advice, diagnosis, or treatment. for
                    general information only and do not constitute any form of advice. HLS assumes
                    no resonsibility for the accuracy of any particular statement and accepts no
                    liability for any loss or damage which may arise from reliance on the
                    information contained on this site
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
        fontSize: FontSize.subTitle,
        color: Colors.black_11,
        textAlign: 'center',
    },
    footerCopyright: {
        fontSize: FontSize.h4,
        color: Colors.black_17,
        marginTop: Spacing.L,
    },
});

export default App;
