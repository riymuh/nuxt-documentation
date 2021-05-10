import axios from 'axios'

export default  {
    login(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/v1/login', {
            email: data.email,
            password: data.password
          })
          .then(function (response) {
            context.commit('loggedIn', response.data)
            resolve({
              status : 'success'
            })
          })
          .catch(function (error) {
            console.log(error);
            reject({
              status : 'fail'
            })
          });
      })
    },
}