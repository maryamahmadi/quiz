(this.webpackJsonpgitfun=this.webpackJsonpgitfun||[]).push([[0],{148:function(e,t,n){e.exports=n.p+"static/media/Andrew.b5780ccb.png"},149:function(e,t,n){e.exports=n.p+"static/media/Maryam.91238087.png"},173:function(e,t,n){e.exports=n(299)},299:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),i=n.n(r),s=n(42),c=n(43),l=n(46),u=n(45);var p=function(){return o.a.createElement("div",{style:{backgroundColor:"#1E1ECF",height:"48px",width:"100%"}},o.a.createElement("div",{style:{float:"left",color:"white",paddingTop:"12px",paddingLeft:"24px",fontWeight:700,fontSize:"24px"}},"NOKIA"),o.a.createElement("div",{style:{float:"left",color:"white",paddingTop:"12px",paddingLeft:"24px",fontWeight:400,fontSize:"18px"}},"GIT Quiz"))},m=n(311),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return console.log("Start props",this.props),o.a.createElement("div",{style:{position:"absolute",top:"30%",bottom:"50%"}},o.a.createElement("div",{style:{fontSize:"30px",fontWeight:"700"}}," Welcome to the Quiz!"),o.a.createElement("div",{style:{paddingTop:"24px",paddingLeft:"100px"}},o.a.createElement(m.a,{primary:!0,onClick:function(){return e.props.setPage("quiz")}}," Start! ")))}}]),n}(o.a.Component),d=n(310),f=n(309),g=n(148),v=n.n(g),b=n(149),E=n.n(b),y={andrew:v.a,maryam:E.a},C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).pickThree=function(){for(var t=[],n=e.props.members.length,a=0;a<3;){var o=Math.floor(Math.random()*n);e.props.members[o]===e.state.imageName||t.includes(e.props.members[o])||(a++,t.push(e.props.members[o]))}return t},e.shuffle=function(e){var t=Math.floor(4*Math.random());if(0!==t){var n=e[0];e[0]=e[t],e[t]=n}console.log("options",e)},e.constructChoices=function(){var t=[];console.log("construct state us",e.state),t.push(e.state.imageName),console.log("construct options is",t);var n=e.pickThree(e.state.imageName);console.log("construct three is",n),n.forEach((function(e){return t.push(e)})),console.log("constructchoices options",t),e.shuffle(t),e.setState({options:t,value:void 0})},e.renderChoices=function(){return console.log("renderChoices options is",e.state.options),o.a.createElement(d.a,null,o.a.createElement(d.a.Field,null,"Selected value: ",o.a.createElement("b",null,e.state.value)),e.state.options.map((function(t){return o.a.createElement(d.a.Field,{key:t},o.a.createElement(f.a,{label:t,name:"radioGroup",value:t,checked:e.state.value===t,onChange:e.handleChange}))})))},e.handleChange=function(t,n){var a=n.value;return e.setState({value:a})},e.state={imageName:null,options:[],value:void 0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e="".concat(this.props.members[this.props.questionNumber-1]);console.log("didmount",e,this.state.image),this.setState({imageName:e},this.constructChoices)}},{key:"didComponentUpdate",value:function(e){if(console.log("didUpdate"),e.questionNumber!==this.props.questionNumber){console.log("didUpdate2");var t="".concat(this.props.members[this.props.questionNumber-1]);this.constructChoices(t)}}},{key:"render",value:function(){var e="".concat(this.props.members[this.props.questionNumber-1]);"".concat(e,".png");return console.log("image name","./resources/".concat(e)),console.log("images",y),o.a.createElement("div",null,o.a.createElement("div",null,"Whose git history is this?"),o.a.createElement("div",null," ",o.a.createElement("img",{src:y[e],width:"500px",height:"200px"})),this.renderChoices(e))}}]),n}(o.a.Component),x=["Maryam","Matt","Steve","Shahram","Rohit","Andrew"];var k=function(){return console.log("hello???"),o.a.createElement("div",null,o.a.createElement(C,{members:x,questionNumber:1})," ")},j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).setPage=function(t){e.setState({page:t})},e.pickComponent=function(){switch(e.state.page){case"start":return o.a.createElement(h,{setPage:e.setPage});case"quiz":return o.a.createElement(k,null);default:return o.a.createElement(h,{setPage:e.setPage})}},e.state={page:"start"},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}}," ",this.pickComponent()," "))}}]),n}(o.a.Component);i.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.8ce087ed.chunk.js.map