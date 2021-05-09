import axios from 'axios'

export default  {
    login(context, data) {
        axios.post('/api/v1/login', {
            email: data.email,
            password: data.password
          })
          .then(function (response) {
            context.commit('loggedIn', response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
}