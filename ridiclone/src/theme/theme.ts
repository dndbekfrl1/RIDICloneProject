//https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow
const palette = {
    dodger_blue:"#1f8ce6",
    slate_gray:"#212529",
    blue_gray:"#475161",
    dark_gray:"#596779",
    ligh_blue:"#c4d1de",
    scuba_blue:"#22b8cf",
    red:"#e64937",
    orange:"#fa5300",
    green:"#4fb303",
    dark_green:"#3fa590",
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
      white:palette.white,
      dark_gray:palette.dark_gray,
      dark_green:palette.dark_green
    },
    spacing: {
      s: 0.5, //8
      m: 1, //16
      l: 1.5, //32
      xl: 2.5, //40
      xxl:6.875,
    },
    fontSize:{
      s:13,
      m:19,
      l:22,
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
  
  