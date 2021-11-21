//https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow
const palette = {
    dodger_blue:"#1f8ce6",
    light_blue:"#ebf6ff",
    slate_gray:"#212529",
    blue_gray:"#475161",
    white_gray:"#f7fafc",
    dark_gray:"#596779",
    ligh_blue:"#ebf6ff",
    scuba_blue:"#22b8cf",
    red:"#e64937",
    orange:"#fa5300",
    green:"#4fb303",
    dark_green:"#3fa590",
    brown:"#b0874a",
    white:"#ffff",
    gray:"#E6E6E6",
    mid_gray:"#d1d5d9"
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
      star:palette.orange,
      border:palette.mid_gray,
      white_gray:palette.white_gray,
      dark_gray:palette.dark_gray,
      dark_green:palette.dark_green,
      gray:palette.gray,
      red:palette.red,
      light_blue:palette.ligh_blue,
    },
    fontColor:{
      black:"#333",
      gray:"#666",
      light_gray:"#999"
    },
    spacing: {
      xs:0.25,//4
      s: 0.5, //8
      m: 1, //16
      l: 1.5, //32
      xl: 2.5, //40
      xxl:15.625,//200
    },
    fontSize:{
      xs:9,
      s:13,
      m:19,
      l:22,
    },
    buttonSize: {
      large: {
        height: '1.5rem',
        padding:"0.4rem 1.3rem",
        fontSize: "13px"
      },
      medium: {
        height: '1rem',
        padding:"0.4rem 0.9rem",
        fontSize: "13px"
      },
      small: {
        height: '1rem',
        padding:"0.25rem 0.65rem",
        fontSize: "9px"
      }
    },
    borderRadius:4,
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
  
  