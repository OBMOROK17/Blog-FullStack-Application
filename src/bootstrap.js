import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      "nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
      "nunito-bold": require("../assets/fonts/Nunito-Bold.ttf")
    });
    await DB.init()
    console.log('database is started...')
  } catch (error) {
    console.log(error);
  }
}
