import React from 'react';

class Inbox extends React.Component {
  componentDidMount() {
    console.log('render');
  }

  render() {
    return (
      <div>
        <h2> The inbox page</h2>
      </div>
    );
  }
}

export default Inbox;
