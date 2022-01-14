import axios from 'axios';

export const APP_URL = 'http://192.168.42.192:8002';

export  const LoginFunction = async(loginEmailValue,loginPassword) => {
  return axios({
    method: 'GET',
    url: `${APP_URL}/${loginEmailValue}/${loginPassword}`,
  })
    .then(res => {
        return res;
    //   const {_id} = res.data[0];
    //   if (_id) {
    //     this.props.navigation.navigate('HomePage');
    //   }
    })
    .catch(err => {
    return err
    });
};


// export default
// {
//     LoginFunction
// }

// export const api = ({ method, url, body }) => {
//     return axios({ method, url, data: body, headers: headers });
//   };