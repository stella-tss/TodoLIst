import { StyleSheet } from 'react-native';
import {theme } from '../themes';

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: theme.colors.base.gray600,
    },
    title: {
       color: theme.colors.base.gray100,
       fontFamily: theme.font_family.bold,
       fontSize: theme.font_size.lg,
    }
});