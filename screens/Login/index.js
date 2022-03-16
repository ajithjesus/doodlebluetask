import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import styles from './styles';
import Button from '../../constant/components/Buttons/Buttons';
import {APP_URL} from '../../api/api';
import Input from '../../constant/components/Input';
import AppLogo from './AppLogo';
import TabSection from './TabSection';

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
          AsyncStorage.setItem('token', token);
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

  handleChangeText = (value, name) => {
    this.setState({[name]: value});
  };

  render() {
    const {tabActiveId} = this.state;
    return (
      <SafeAreaView style={styles.safeAreaFlex}>
        <View style={styles.container}>
          <AppLogo />
          <TabSection
            handleChangeFirstTab={() => this.handleChangeTab(1)}
            handleChangeSecondTab={() => this.handleChangeTab(2)}
            tabActiveId={tabActiveId}
          />

          {tabActiveId === 1 ? (
            <View style={styles.loginInputWrap}>
              <Input
                onChangeText={val => this.handleChange(val, 'username')}
                value={this.state.loginEmailValue}
                placeholder="Your Email"
                name="username"
                iconType="email"
              />
              <Input
                onChangeText={val => this.handleChange(val, 'password')}
                value={this.state.loginPassword}
                placeholder="Your Password"
                name="password"
                secureTextEntry={this.state.showPassword}
                showPassword={this.state.showPassword}
                onPress={this.handleShowPassword}
                iconType="password"
              />

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
              {tabActiveId === 2 && (
                <View style={styles.loginInputWrap}>
                  <Input
                    onChangeText={val => this.handleChange(val, 'username')}
                    value={this.state.loginEmailValue}
                    placeholder="Your Email"
                    name="username"
                    iconType="email"
                  />
                  <Input
                    onChangeText={val => this.handleChange(val, 'password')}
                    value={this.state.loginPassword}
                    placeholder="Your Password"
                    name="password"
                    secureTextEntry={this.state.showPassword}
                    showPassword={this.state.showPassword}
                    onPress={this.handleShowPassword}
                    iconType="password"
                  />
                  <View style={styles.loginButtonPaddingTop}>
                    <Button
                      title="Sign"
                      handleToLogin={this.handletoRegister}
                    />
                  </View>
                </View>
              )}
            </KeyboardAwareScrollView>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    product_list: state.ProductListReducer.product_list,
    cart_count: state.ProductListReducer.cart_count,
  };
};

export default connect(mapStateToProps, null)(Login);
