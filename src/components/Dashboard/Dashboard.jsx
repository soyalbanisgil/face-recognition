import React, { Component } from 'react';
import Rank from '../Rank/Rank';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
// import firebase, { firestore } from '../../firebase/firebase.utils';

const app = new Clarifai.App({
    apiKey: '5f0692c9c5ec494caec3f2ec3f7363ca'
   });

class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
          input: '',
          imgURL: '',
          box: {},
          displayName: ''
        }
      }


      componentDidMount() {

        const { displayName } = this.state
    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
          if (userAuth) {
            await createUserProfileDoc(userAuth, { displayName });
            console.log(userAuth);
            this.setState({currentUser: userAuth.displayName})
          } else {
            console.log('usuario no existe')
          }
        });
      }
    
      componentWillUnmount() {
        this.unsubscribeFromAuth();
      }


      calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const img = document.getElementById('inputimage');
        const width = Number(img.width);
        const height = Number(img.height);
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      }
    
      displayFaceBox = box => {
        this.setState({box: box});
      }
    
      onInputChange = (e) => {
        this.setState({input: e.target.value})
      }
    
      onButtonSubmit = (e) => {
        e.preventDefault();
        this.setState({imgURL: this.state.input})
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err))
    
      }
    render(){
        return (
            <div>
                <Rank displayName={this.state.currentUser} />
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
                <FaceRecognition box={this.state.box} imgURL={this.state.imgURL} />
            </div>
        )
    }
}

export default Dashboard;
