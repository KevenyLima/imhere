import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:theme.colors.background,
    padding:24
  },
  eventContainer:{
    marginBottom:16,
  },
  title:{
    color: theme.colors.gray_100,
    fontSize: theme.fonts.sizes.medium,
    fontWeight:"bold",
    marginTop:48
  },
  dataText:{
    color: theme.colors.gray_300,
    fontSize: theme.fonts.sizes.small
  },
  form:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    height:56,
    marginBottom:40,
  },
  input:{
    flex:1,
    padding:16,
    marginRight:16,
    fontSize:theme.fonts.sizes.small,
    color:theme.colors.gray_100,
    backgroundColor:theme.colors.primary,
    borderRadius: theme.border.radius
  },
  button:{
    width:56,
    height:56,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:theme.colors.green,
    borderRadius: theme.border.radius
  },
  buttonText:{
    color:theme.colors.white,
    fontSize:theme.fonts.sizes.medium
  },
  emptyListText:{
    fontSize:theme.fonts.sizes.small,
    color: theme.colors.white,
    textAlign:"center",
  }
})