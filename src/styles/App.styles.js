import { StyleSheet } from 'react-native';
import { colors } from './colors';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  
  },

  ScrollView: {
    flex: 1,
  },

  content : {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 24,
  },

  header: {
    marginBottom: 32,
  },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    subTitle: {
      fontSize: 16,
      color: colors.textSecondary,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
    },

    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 14,
      },

      currencyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -4,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },

});