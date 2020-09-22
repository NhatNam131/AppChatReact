// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Image,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground, Button
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import io from "socket.io-client";

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       chatMessage: "",
//       chatMessages: []
//     };
//   }

//   submitChatMessage() {
//     if(this.state.chatMessage !== ''){
//       this.socket.emit('chat message', this.state.chatMessage);
//     }
//     this.setState({ chatMessage: '' });
//   }

//   componentDidMount() {
//     this.socket = io("http://192.168.137.1:3000");
//     this.socket.on("chat message", msg => {
//       this.setState({
//         chatMessages: [...this.state.chatMessages, msg]
//       });
//     });
//   }

//   render() {
//     const chatMessages = this.state.chatMessages.map(chatMessage => (
//       <Text style={styles.message}>{chatMessage}</Text>));

//     return (

//       <View style={styles.container}>
//         <ImageBackground
//           style={styles.bg}
//           source={require('./images/bgchat.png')}>
//           {chatMessages}
//           <View style={styles.bottom}>
//             <TextInput
//               style={styles.textInput}
//               autoCorrect={false}
//               placeholder={'Message...'}
//               value={this.state.chatMessage}
//               onChangeText={chatMessage => {
//                 this.setState({ chatMessage });
//               }}
//             />
//             {/* <TouchableOpacity style={styles.btnSend}>
//               <Image style={styles.btnSend}
//                 sourse={require('./images/send.png')}></Image>
//             </TouchableOpacity> */}
//             <Button
//               style={styles.btnSend}
//               title='Send'
//               onPress={() => this.submitChatMessage()}>
//             </Button>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     alignItems: 'center'
//   },

//   bg: {
//     width: '100%',
//     height: '100%'
//   },

//   bottom: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     padding: 5,
//     marginTop: 'auto'
//   },

//   textInput: {
//     height: 50,
//     marginRight: 10,
//     paddingLeft: 10,
//     width: '84.5%',
//     fontSize: 15
//   },

//   message: {
//     padding: 10,
//     backgroundColor: '#02aace',
//     color: 'white',
//     borderTopLeftRadius: 17,
//     borderBottomLeftRadius: 17,
//     borderTopRightRadius: 17,
//     marginTop: 10,
//     marginBottom: 10
//   },

//   btnSend: {
//     width: 10
//   }
// });

// //Set-ExecutionPolicy -Scope Process-ExecutionPolicy Bypass


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeChat } from './component/HomeChat';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeChat"
          component={HomeChat}
          options={{ title: 'Thực tập FPT'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

