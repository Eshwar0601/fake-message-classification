import React, { Component } from 'react'


class FileInput extends Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('your Message was submitted: ' + this.state.value);
      alert('The code is under constuction the prediction cannot be dont at this moment !');
      event.preventDefault();
    }

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <form onSubmit={this.handleSubmit}>
                
                <textarea className="form-control mt-5 input-form" type="text" value={this.state.value} onChange={this.handleChange} />
                
                <button  className="btn btn-lg mt-5 bg-warning" type="submit" value="Submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>

      );
    }

  }
export default FileInput
