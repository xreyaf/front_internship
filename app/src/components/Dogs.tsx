/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchDogs from '../redux/actionCreators/fetchDogs';
import { Breed } from '../redux/reducers/dogsReducer';

interface MyProps {
  fetchDogs(): void;
  dogs: Breed[];
}

interface MyState {
  doggys: any;
}

class Dogs extends Component<MyProps, MyState> {
  constructor(props: MyProps | Readonly<MyProps>) {
    super(props);
    this.state = {
      doggys: props.dogs
    };
  }

  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    console.log(this.state.doggys);
    return (
      <div className="container">
        <h1>Еще немножко Redux</h1>
        <h3>Породы собак</h3>
        <div>
          {this.state.doggys.dogs
            .filter((item: any, index: number) => index < 10)
            .map(
              (breed: {
                id: React.Key | null | undefined;
                name:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <div key={breed.id}>
                  <p>{breed.name}</p>
                </div>
              )
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({ dogs: state.dogs });

export default connect(mapStateToProps, { fetchDogs })(Dogs);
