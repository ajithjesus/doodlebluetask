import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import Images from '../Constant/Images/Images';
import Colors from '../Constant/Colors/Colors';
import FontFamily from '../Constant/FontFamily/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../constant/components/Buttons/Buttons';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {APP_URL} from '../../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActiveId: 1,
      loginEmailValue: '',
      loginPassword: '',
      showPassword: true,
      name: '',
      email: '',
      password: '',
    };
  }

  handleChangeTab = id => {
    this.setState({tabActiveId: id});
  };

  handleShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  handleToLogin = () => {
    this.props.navigation.navigate('HomePage');
  };

  handletoRegister = () => {
    const {name, email, password} = this.state;
    this.handleToRegisterUser(name, email, password);
  };

  handleToRegisterUser = (name, email, password) => {
    axios({
      method: 'POST',
      url: `${APP_URL}/register/newregister`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then(res => {
        this.setState({
          name: '',
          email: '',
          password: '',
          tabActiveId: 1,
        });
      })
      .catch(err => {
        console.log('error in request', err);
      });
  };

  Login = async (loginEmailValue, loginPassword) => {
    try {
      axios({
        method: 'POST',
        url: `${APP_URL}/login`,
        data: {
          email: loginEmailValue,
          password: loginPassword,
        },
      })
        .then(res => {
          const {token} = res.data;
          let a = AsyncStorage.setItem('token', token);
          if (token) {
            this.props.navigation.navigate('HomePage');
          }
        })
        .catch(err => {
          console.log('error in request', err);
        });
    } catch {
      console.log('login err called');
    }
  };

  // handlechanage

  handleChangeValues = (value, name) => {
    this.setState({[name]: value});
  };

  render() {
    const {tabActiveId} = this.state;
    return (
      <SafeAreaView style={styles.safeAreaFlex}>
        <View style={styles.container}>
          <View style={styles.loginwrapImage}>
            <Image source={Images.LOGIN} style={styles.loginWrapImageWidth} />
          </View>
          <View style={styles.loginTabSection}>
            <View style={styles.loginTabWidth}>
              <TouchableOpacity onPress={() => this.handleChangeTab(1)}>
                <Text style={styles.loginTitle}>Login</Text>
              </TouchableOpacity>
              {tabActiveId === 1 && <Text style={styles.loginTitleBorder} />}
            </View>

            <View style={styles.loginTabWidth}>
              <TouchableOpacity onPress={() => this.handleChangeTab(2)}>
                <Text style={styles.loginTitle}>SIGNUP</Text>
              </TouchableOpacity>
              {tabActiveId === 2 && <Text style={styles.loginTitleBorder} />}
            </View>
          </View>
          {tabActiveId === 1 ? (
            <View style={styles.loginInputWrap}>
              <View style={styles.loginInputContainer}>
                <Ionicons name="person" size={20} color={Colors.darkblue} />
                <TextInput
                  style={styles.loginInput}
                  onChangeText={value => {
                    this.handleChangeValues(value, 'loginEmailValue');
                  }}
                  value={this.state.loginEmailValue}
                  placeholder="Your Email"
                  placeholderTextColor="#929193"
                />
              </View>

              <View style={styles.loginInputContainer}>
                <Ionicons
                  name="lock-closed"
                  size={20}
                  color={Colors.darkblue}
                />
                <TextInput
                  style={styles.loginInput}
                  onChangeText={value => {
                    this.handleChangeValues(value, 'loginPassword');
                  }}
                  value={this.state.loginPassword}
                  placeholder="Your Password"
                  placeholderTextColor="#929193"
                  secureTextEntry={this.state.showPassword}
                />
                <Ionicons
                  onPress={this.handleShowPassword}
                  name={this.state.showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color={Colors.darkblue}
                />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.loginForgotText}>Forgot Password</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.loginButtonPaddingTop}>
                <Button title="Login" handleToLogin={this.handleToLogin} />
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styles.loginTermsCondition}>
                    By singing up, you are agree with our{' '}
                    <Text style={styles.loginTermsConditionInner}>
                      Terms & Condition
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <KeyboardAwareScrollView>
              <View style={styles.loginInputWrap}>
                <View style={styles.loginInputContainer}>
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={Colors.darkblue}
                  />
                  <TextInput
                    style={styles.loginInput}
                    onChangeText={value => {
                      this.handleChangeValues(value, 'name');
                    }}
                    value={this.state.name}
                    placeholder="Your UserName"
                    placeholderTextColor="#929193"
                  />
                </View>
                <View style={styles.loginInputContainer}>
                  <Ionicons name="person" size={20} color={Colors.darkblue} />
                  <TextInput
                    style={styles.loginInput}
                    onChangeText={value => {
                      this.handleChangeValues(value, 'email');
                    }}
                    value={this.state.email}
                    placeholder="Your Email"
                    placeholderTextColor="#929193"
                  />
                </View>

                <View style={styles.loginInputContainer}>
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={Colors.darkblue}
                  />
                  <TextInput
                    style={styles.loginInput}
                    onChangeText={value => {
                      this.handleChangeValues(value, 'password');
                    }}
                    value={this.state.password}
                    placeholder="Your password"
                    placeholderTextColor="#929193"
                    secureTextEntry={this.state.showPassword}
                  />
                  <Ionicons
                    onPress={this.handleShowPassword}
                    name={this.state.showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={Colors.darkblue}
                  />
                </View>

                <View style={styles.loginButtonPaddingTop}>
                  <Button title="Sign" handleToLogin={this.handletoRegister} />
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaFlex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  loginwrapImage: {
    height: 250,
    width: '100%',
    marginTop: 40,
  },
  loginWrapImageWidth: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  loginTabSection: {
    width: '100%',
    flexDirection: 'row',
  },
  loginTabWidth: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
  },

  loginTitle: {
    fontFamily: 'Raleway-Black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: Colors.darkGreen,
  },
  loginTitleBorder: {
    borderBottomColor: Colors.darkGreen,
    borderBottomWidth: 2,
    width: 50,
    height: 10,
  },
  loginInputWrap: {
    padding: 20,
  },
  loginInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderColor: '#f1f6fe',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor: '#f1f6fe',
    marginBottom: 10,
    width: '100%',
  },
  loginInput: {
    fontFamily: FontFamily.RalewayMedium,
    fontSize: 14,
    padding: 10,
    height: 40,
    width: '85%',
  },
  loginForgotText: {
    textAlign: 'right',
    fontFamily: FontFamily.RalewayMedium,
    fontSize: 12,
  },
  loginButtonPaddingTop: {
    paddingTop: 40,
  },
  loginTermsCondition: {
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: FontFamily.RalewayMedium,
    fontSize: 12,
  },
  loginTermsConditionInner: {
    fontWeight: 'bold',
    fontFamily: FontFamily.RalewayBold,
    color: Colors.darkGreen,
  },

  // Footer_wrap
});

const mapStateToProps = state => {
  return {
    product_list: state.ProductListReducer.product_list,
    cart_count: state.ProductListReducer.cart_count,
  };
};

export default connect(mapStateToProps, null)(Login);
