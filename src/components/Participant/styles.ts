import { Button, StyleSheet } from "react-native"
import { theme } from "../../theme"
export const styles = StyleSheet.create({
  container:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:theme.colors.primary,
    borderRadius:theme.border.radius,
    marginBottom:10,
  },
  name:{
    flex:1,
    fontSize:theme.fonts.sizes.small,
    color:theme.colors.white,
    marginLeft:16,
  },
  button:{
    width:56,
    height:56,
    justifyContent:"center",
    alignItems:"center",
    fontSize:theme.fonts.sizes.medium,
    borderRadius:theme.border.radius,
    backgroundColor:theme.colors.red
  },
  buttonText:{
    fontSize:theme.fonts.sizes.large,
    color:theme.colors.white,
  }
})