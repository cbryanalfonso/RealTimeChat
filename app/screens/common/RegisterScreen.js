import { Formik } from 'formik';
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonUI from '../../components/Buttons/ButtonUI';
import TextUi from '../../components/Text/TextUi';
import InputText from '../../components/TextInput/InputText';
import { backGroundLogin } from '../../utils/styles/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';

export const RegisterScreen = ({ navigation }) => {

  const registerUser = ({ email, password, confirmPassword, name, lastName, gender, dBirth } = values) => {
    if (email && password && confirmPassword && name && lastName && gender && dBirth) {
      if (password === confirmPassword) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            var user = userCredential.user;
            alert('User created successfull')
            user.updateProfile({
              displayName: name,
            })
              .then(() => {
                firebase.database()
                  .ref(`/Usuarios/${user.uid}`)
                  .set({
                    name: name,
                    lastName: lastName,
                    email: email,
                    password: password,
                    uid: user.uid,
                    gender: gender,
                    dBirth: dBirth
                  })
                  .then(() => {
                    console.log('Lo que se sube a base de datos->');
                    navigation.navigate('UserCreated');
                  })
                  .catch(error => {
                    console.log(error);
                  });
                //registerInfoUser(user.uid, email, password, confirmPassword, name, lastName, gender, dBirth)

              })
              .catch((err) => {
                alert(err)
              })
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
              alert('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
            console.error(error);
          });
      } else {
        alert('Password doesn´t match ')
      }
    } else {
      alert("Please complete de fields")
    }
  }

  const registerInfoUser = (uid, email, password, confirmPassword, name, lastName, gender, dBirth) => {
    console.log(uid);
    /* database()
      .ref(`/Users/${uid}`)
      .set({
        uid,
        email,
        password,
        name,
        lastName,
        gender,
        dBirth,
      })
      .then(() => console.log('Data set.')); */
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.subContainerTitle}>
        <TextUi
          styleTxt={'txtTitle'}
          txt={'Welcome!'}
        />
        <TextUi
          styleTxt={'txtNewUser'}
          txt={'Sign up to continue'}
          addStyle={styles.txtSubtitle}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={{ height: hp(83), marginTop: wp(1) }}
        >
          <View>
            <Formik
              initialValues={{
                name: '',
                lastName: '',
                email: '',
                gender: '',
                dBirth: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={values => registerUser(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <InputText
                    placeholder="First Name"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("name")}
                    initialValue={values.name}
                    Icono={'person'}
                    colorIcon={'#FFF'}
                  />
                  <InputText
                    placeholder="Last Name"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("lastName")}
                    initialValue={values.lastName}
                    Icono={'person'}
                    colorIcon={'#FFF'}
                  />
                  <InputText
                    placeholder="Email"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("email")}
                    initialValue={values.email}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    Icono={'email'}
                    colorIcon={'#FFF'}
                  />
                  <InputText
                    placeholder="Gender"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("gender")}
                    initialValue={values.gender}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    Icono={'person'}
                    colorIcon={'#FFF'}
                  />
                  <InputText
                    placeholder="Date of Birth"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("dBirth")}
                    initialValue={values.dBirth}
                    autoCapitalize={'none'}
                    Icono={'person'}
                    colorIcon={'#FFF'}
                  />
                  <InputText
                    placeholder="Password"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("password")}
                    initialValue={values.password}
                    autoCapitalize={'none'}
                    Icono={'locked'}
                    colorIcon={'#FFF'}
                  />
                  <InputText
                    placeholder="Confitm Password"
                    placeholderTextColor='#B1B1B1'
                    onChangeText={handleChange("confirmPassword")}
                    initialValue={values.confirmPassword}
                    autoCapitalize={'none'}
                    Icono={'locked'}
                    colorIcon={'#FFF'}
                  />
                  <View style={{ marginTop: wp(7) }}>
                    <ButtonUI
                      onPress={handleSubmit}
                      txt={'SIGN UP'}
                      styled={'LoginButton'}
                      addStyle={{ marginVertical: wp(5) }}
                    />

                  </View>
                  <View style={{ marginTop: hp(5), flexDirection: 'row', justifyContent: 'center' }}>
                    <TextUi
                      styleTxt={'txtNewUser'}
                      txt={'Already member ? '}
                    />
                    <ButtonUI
                      txt={'Login'}
                      styled={'signUp'}
                      onPress={() => navigation.navigate('LoginScreen')}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGroundLogin,
  },
  subContainerTitle: {
    marginHorizontal: wp(5),
    marginVertical: wp(2)
  },
  txtSubtitle: {
    textAlign: 'justify',
    marginTop: wp(4)
  }
});