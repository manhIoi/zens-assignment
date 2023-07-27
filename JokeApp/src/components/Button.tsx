import React from 'react';
import { StyleSheet, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors, Spacing } from '../themes';

export interface ButtonProps extends TouchableOpacityProps {
    title: String;
    titleProps?: TextProps;
    type?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = props => {
    const { titleProps, title = '', type = 'primary', ...buttonProps } = props;
    const _baseStyle = {
        backgroundColor: props.type === 'secondary' ? Colors.secondary : Colors.primary,
    };
    return (
        <TouchableOpacity
            {...buttonProps}
            style={[_baseStyle, styles.container, buttonProps.style]}
        >
            <Text {...titleProps} style={[styles.title, titleProps?.style]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export { Button };
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingHorizontal: Spacing.XXL,
        paddingVertical: Spacing.M,
    },
    title: {
        color: Colors.black_01,
    },
});
