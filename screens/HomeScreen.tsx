import { Alert ,View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import store from '../redux/store';
import {logout} from '../redux/login/loginSlice';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const screenState = useSelector(state => state);
  const [login , setLogin] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });



  const handleLogin = () => {
    dispatch(logout())
    navigate("/")
  };

  
  return (
    
    <View style={styles.container}>

      
      <Button title="Back" onPress={handleLogin} />
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


export default HomeScreen