import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors.js';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inputBackground,
    padding: 15,
    paddingVertical: 8,
    margin: 4,
    borderRadius: 8,
  },

buttonText: {
    color: colors.text,
    fontWeight: '500',
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
});