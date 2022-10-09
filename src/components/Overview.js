

function Overview(props) {

    return (
      <div className="Overview">
        <h1>{props.tasks.map(
            (task) => {
                return (<div>{task} </div>) 
            }
        )}</h1>
      </div>
    );
  }

export default Overview;
