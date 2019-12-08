//https://www.tutorialspoint.com/react_native/react_native_http.htm
//https://facebook.github.io/react-native/docs/network

class Rest extends React.Component{
	state = {
		data: ''
	}
	
	componentDidMount = () => {
	      fetch('https://jsonplaceholder.typicode.com/posts/1', {
	         method: 'GET'
	      })
	      .then((response) => response.json())
	      .then((responseJson) => {
	         console.log(responseJson);
	         this.setState({
	            data: responseJson
	         })
	      })
	      .catch((error) => {
	         console.error(error);
	      });
	   };
	   
	   render() {
		      
		   return (


		            <div>
		               {this.state.data.title}
		            </div>
		      );
		   }
	
	
	
}



ReactDOM.render(
    <Rest />,
    document.getElementById('rest')
);
