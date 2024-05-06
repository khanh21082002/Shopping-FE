/**
 * @flow
 */
import { Typography, Colors, Assets } from 'react-native-ui-lib';
import { Dimensions, Platform, StyleSheet } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import commonStyles from './common';

const { width } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device

Colors.loadColors(colors);

Typography.loadTypographies({
  title: {
    fontSize: 35,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  h1: {
    fontSize: 34,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  rubik18: {
    fontFamily: fonts.primary,
    fontSize: 18,
    lineHeight: 22,
  },
  rubik20Bold: {
    fontFamily: fonts.primary,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  rubik24Bold: {
    fontFamily: fonts.primary,
    fontSize: 24,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  h1Rubik: {
    fontSize: 28,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: '500',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  h2: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fonts.primaryBold,
  },
  h3: {
    fontSize: 16,
    lineHeight: 22,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  h4: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: fonts.primary,
  },
  p: {
    fontSize: 14,
    lineHeight: 20,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: '400',
      },
      android: {
        fontFamily: fonts.primaryAndroid,
      },
    }),
  },
  default: {
    fontFamily: fonts.primary,
    fontSize: 18,
  },
  defaultMedium: {
    fontFamily: fonts.primaryMedium,
    fontSize: 18,
  },
  defaultLight: {
    fontFamily: fonts.primary,
  },
});

Assets.loadAssetsGroup('images', {});

Assets.loadAssetsGroup('icons', {});



const htmlStyles = StyleSheet.create({
  p: {
    marginBottom: 10,
  },
  h1: {
    marginBottom: 10,
  },
  h2: {
    marginBottom: 10,
  },
  h3: {
    marginBottom: 10,
  },
  h4: {
    marginBottom: 10,
  },
  h5: {
    marginBottom: 10,
  },
  h6: {
    marginBottom: 10,
  },
  div: {
    marginBottom: 10,
  },
  ul: {
    marginLeft: 20,
    marginBottom: 10,
  },
  ol: {
    marginLeft: 20,
    marginBottom: 10,
  },
});

export { colors, fonts, scale, commonStyles, htmlStyles };
