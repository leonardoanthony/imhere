import { Home } from "@/src/screens/Home";
import { StatusBar } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar 
        barStyle={"light-content"} 
        backgroundColor={"#131016"} 
        translucent
      />
      <Home />    
    </>
  );
}


