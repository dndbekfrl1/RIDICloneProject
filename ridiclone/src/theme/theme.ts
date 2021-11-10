//https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow
const palette = {
    dodger_blue:"#1f8ce6",
    slate_gray:"#212529",
    blue_gray:"#475161",
    ligh_blue:"#c4d1de",
    scuba_blue:"#22b8cf",
    red:"#e64937",
    orange:"#fa5300",
    green:"#4fb303",
    brown:"#b0874a",
    white:"#ffff"
  }
  
  export const theme = {
    colors: {
      background: palette.white,
      text:palette.slate_gray,
      primary: palette.dodger_blue,
      success: palette.green,
      danger: palette.red,
      rating:palette.orange,
      failure: palette.red,
      notice:palette.brown,
    },
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
    },
    textVariants: {
      header: {
        fontFamily: 'Raleway',
        fontSize: 36,
        fontWeight: 'bold',
      },
      body: {
        fontFamily: 'Merriweather',
        fontSize: 16,
      },
    }
  };
  
  