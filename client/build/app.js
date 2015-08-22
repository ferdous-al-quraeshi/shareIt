var CommentBox=React.createClass({displayName: "CommentBox",
	render:function(){
		return(
			React.createElement("div", null, 
				React.createElement("h1", null, this.props.name, " "), 
				React.createElement("p", null, this.props.age)
			)
		)
	}

})

var people=[{name:'Rubel hasan',age:'30'},{name:'Shwon hasan',age:'20'}]
var Mycomment=React.createClass({displayName: "Mycomment",
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
			React.createElement("div", null, 
				this.state.commentlist.map(function(list){
					return React.createElement(CommentBox, {name: list.name, age: list.age})
				})
			)
		)
	}

})

React.render(React.createElement(Mycomment, {people: people}),document.getElementById('example'))
