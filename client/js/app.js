var CommentBox=React.createClass({
	render:function(){
		return(
			<div>
				<h1>{this.props.name} </h1>
				<p>{this.props.age}</p>
			</div>
		)
	}

})

var people=[{name:'Rubel hasan',age:'30'},{name:'Papon hasan',age:'20'}]
var Mycomment=React.createClass({
	getInitialState:function(){
		return {
			commentlist:[{name:'rubel',age:'30'},{name:'sagar',age:'20'}]
		};
	},
	componentDidMount:function(){
		this.setState({
			commentlist:this.props.people
		})
		console.log('componentDidMount');
	},

	render:function(){
		console.log(this.state.commentlist)
		return(
			<div>
				{this.state.commentlist.map(function(list){
					return <CommentBox name={list.name} age={list.age}/>
				})}
			</div>
		)
	}

})

React.render(<Mycomment people={people} />,document.getElementById('example'))
