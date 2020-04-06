import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  state = {
    studentList: [],
  };

  //Use Axios to create a get request from server
  getStudents = () => {
    axios.get('/students').then((response) => {
      //Happy path - we get a good response
      console.log('recieved students',response.data);
      //Want to see the songs, so put into state
      //This is setting state to a new array (not mutating)
      //of all songs from the server (so no need to spread)
      this.setState({
        studentList: response.data,
      });
    }).catch((error) => {
      alert('Bad things happened....');
      console.log('Error on GET songs', error);
    });
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
    axios.post('/students',newStudent).then((response) => {
      //get all the songs again
      this.getStudents();
    }).catch((error) => {
      alert('Bad things happened....');
      console.log('Error on GET students', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <p>Student list goes here.</p>
        <StudentList list={this.state.studentList}/>
      </div>
    );
  }
}

export default App;
