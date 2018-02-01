webpackJsonp([0xefeaa6d1881d],{245:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},l=a(1),r=i(l),o=a(3),u=i(o),s=a(60),c=i(s),d={margin:".5em",paddingLeft:".5em"},m={width:"25px"},f=function(e){var t=e.person;return r.default.createElement("div",{style:n({},d,{borderLeft:".5em solid "+t.color})},r.default.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"1em",justifyContent:"space-between"}},r.default.createElement("h4",null,t.name,r.default.createElement("br",null),r.default.createElement("span",{style:{fontSize:".8em"}},"— ",t.title)),r.default.createElement("span",null,t.github?r.default.createElement("a",{href:t.github},r.default.createElement("img",{src:c.default,style:m})):"")),r.default.createElement("p",null,t.blurb))};f.PropTypes={person:u.default.object},t.default=f,e.exports=t.default},60:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPjwvc3ZnPg=="},248:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(1),l=i(n),r=a(3),o=i(r),u=a(245),s=i(u),c=function(e){var t=e.data,a=[{name:"Jimmy McBroom",title:"GIS Analyst",github:"https://github.com/jmcbroom",blurb:"Jimmy started working with spatial data while studying planning & was hooked on programming when he made his first interactive web map. Before joining IET in November 2016, he created GTFS data and performed transit accessibility analyses, scraped and coalesced nationwide parcel data, and enumerated residents for the 2010 U.S. Census.",color:"#ff9955"},{name:"Jessica McInchak",title:"Backend Web Developer",github:"https://github.com/jessicamcinchak",blurb:"Jessica has been building things on the web and doing open data research projects in Detroit for five years and counting. Before joining IET in January 2017, she built news apps for public radio, developed strategies for equitable open data with the Detroit Community Technology Project, and cofounded the Detroit Ledger, a grant data collection effort to illustrate Detroit's philanthropic landscape.",color:"#3bd7ab"},{name:"Juan Carlos Angeles",title:"Front-end Web Developer",github:"",blurb:"",color:"#278b7e"},{name:"Mike Evans",title:"Internet of Things Developer",github:"",blurb:"",color:"#8c56bb"}];return l.default.createElement("div",{style:{maxWidth:"800px"}},l.default.createElement("h1",null,"About ",t.site.siteMetadata.title),l.default.createElement("p",null,"The Office of Innovation & Emerging Technology (IET) is a team of programmers at the ",l.default.createElement("a",{href:"http://www.detroitmi.gov/"},"City of Detroit"),"."),l.default.createElement("p",null,"We partner with City departments to build digital tools that solve civic problems and information challenges. Our projects can take a few forms:",l.default.createElement("ul",{style:{margin:"1em"}},l.default.createElement("li",null," sunlighting a new type of City data and making it accessible & understandable"),l.default.createElement("li",null," building web applications that help people communicate with the City in a new way")),"In any case, our projects aim to simplify internal work flows and make data more accessible to residents."),l.default.createElement("p",null,"We value working iteratively and openly. We approach projects by identifying a problem, developing prototypes, testing with users first-hand, and evaluating the utility (or uselessness) of a solution. We bring a fresh toolkit of open-source libraries and softwares to interact with the larger ecosystem of enterprise systems traditionally used throughout the City. All of our code is on ",l.default.createElement("a",{href:"https://github.com/cityofdetroit"},"Github"),"."),l.default.createElement("p",null,"Have an idea, project pitch, or just want to say hello? Email us at ",l.default.createElement("a",{href:"mailto:iet@detroitmi.gov"},"iet@detroitmi.gov"),"."),l.default.createElement("h3",null,"Our team"),l.default.createElement("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",marginBottom:"1em"}},a.map(function(e,t){return l.default.createElement(s.default,{person:e,key:t})})),l.default.createElement("h3",null,"History"),l.default.createElement("p",null,"The Office of Innovation & Emerging Technology (IET) was established in 2015 under the Department of Innovation & Technology's restructuring plan. Around the same time, the mayor of the City of Detroit signed into law Detroit's first open data policy: ",l.default.createElement("a",{href:"https://data.detroitmi.gov/about"}," Government Open Data Access To All (GO DATA) or Executive Order 2015-2"),". This policy deemed all City information open by default. That commitment to transparency shaped how IET would prioritize working in the open and sharing our code, methods, and ideas along the way."),l.default.createElement("p",null,"Our current team came together in 2017. Detroit's Chief Innovation Officer (CIO) Beth Niblock acts as our interim director. We appreciate these past team members:"),l.default.createElement("ul",null,l.default.createElement("li",null,"Garlin Gilchrist was the first Director of Innovation & Emerging Technology and helped us establish our footing and articulate a vision. He left to run for local office in spring 2017"),l.default.createElement("li",null,"Joel Howrani Heeres was Director of Open Data and activated our open data program. He became Detroit's Director of Sustainability in spring 2017")))};c.propTypes={data:o.default.object},t.default=c;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-js-bee42907668057eae44a.js.map