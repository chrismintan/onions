var React = require("react");
var Layout = require('../layout/layout');
var ErrorMessage = require('../layout/error');

class Index extends React.Component {
  render() {

    let users = this.props.users.map(users => {
            return (
        <div key={users.id} className="col-12">
          <div className="card p-3 my-2 shadow-sm">
                        <h4><a href={"/users/" + users.id} className="text-secondary">{users.username}</a></h4>
          </div>
        </div>
      )
    });

    return (

      <Layout title="Users" cookies={this.props.cookies}>
        <div className="col-12">
          <h1 className="logo">Users</h1>
          <ErrorMessage errorMessage={this.props.errorMessage}/>
        </div>
          {users}
        <script src='/background.js'></script>
      </Layout>
    )
  }
}

module.exports = Index;
