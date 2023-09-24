import { Alert ,View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React , {useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import store from '../redux/store';
import {verifyAccount} from '../redux/login/loginSlice';


const LoginScreen = () => {
  const dispatch = useDispatch();
  const screenState = useSelector(state => state);
  const [login , setLogin] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    //console.log(formData)

    dispatch(verifyAccount(formData));

    setLogin(screenState.login.auth)
    
    // if (screenState.login.auth == true) {
    //   Alert.alert('ok');
    //   // navigate("/home")
    //   // dispatch(login());
    // } else {
    //   Alert.alert('Invalid username or password');
    //   //alert('Invalid username or password');
    // }
  };
  if(screenState.login.auth == true) {
    navigate("/home")
  }
  // useEffect(()=> {
  //   Alert.alert('ok');
  // },[login])
  return (
    
    <View style={styles.container}>
      <Text style ={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setFormData({ ...formData, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  input: {
     width: '80%',
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding : 10,
    marginBottom : 10,
    borderRadius : 10
    // marginBottom: 10,
    // paddingLeft: 10,
  },
  title : {
    marginBottom : 10,
    fontWeight : '900',
    fontSize : 30
  }
});


export default LoginScreen