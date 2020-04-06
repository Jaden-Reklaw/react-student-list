import React, { Component } from 'react';


class StudentList extends Component {

    render() {
        return (
            <section>
                <ul>
                    {this.props.list.map((student) => 
                        <li key={student.id}>{student.github_name}</li>
                    )}
                </ul>
            </section>
        );
    }
}

export default StudentList;