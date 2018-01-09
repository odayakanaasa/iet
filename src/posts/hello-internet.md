---
title: "Hello, Internet"
date: "2018-01-08"
tags: ["hello-world", "iet"]
---

Hey there, we're IET.

IET is a team of programmers in the Department of Innovation and Technology (DoIT) at the [City of Detroit](http://www.detroitmi.gov/).

We partner with City departments to build digital tools that solve information challenges. Our projects aim to simplify internal work flows and make data more accessible to residents.

IET stands for Innovation & Emerging Technology for now, but we're on a new year's mission to swap out "innovation" with something less buzzy. Say hello and drop ideas at [iet@detroitmi.gov](mailto:iet@detroitmi.gov).

### How we started

Our team came together about a year ago to "build cool things" with the small catch that there wasn't much of a foundation to build from. So, our first few months became dedicated to modernizing our [ETL tools](https://github.com/CityOfDetroit/etl) (read as tools to *extract-transform-load* data) and spinning up a data warehouse. 

We also built our first few apps, which notably included:
- solid waste survey
  - DPW field inspectors used to paper survey commercial sites where the City picks up trash, but we helped them transition to a mobile survey that preloads parcel info
- [crime-viewer](https://github.com/CityOfDetroit/crime-viewer)
  - Officially launching in early 2018, Crime Viewer was designed and tested with Detroit's neighborhood radio patrol members who monitor crime stats and create filtered reports about their communities
- [demo-alerts](https://github.com/CityOfDetroit/demo-alerts)
  - Demo Alerts is an SMS tool that shares if, when and where demolitions are planned to happen and lead safe health tips; it's also due to officially launch in early 2018
- [zoom-nineteen](https://github.com/CityOfDetroit/zoom-nineteen)
  - This map breaks a lot of design rules and came together quickly, but keeps reminding us that departments are eager to layer *all* the data and visualize City programs block-by-block, or affectionately at `{ 'zoom': 19 }`

### How we work today

We work in the open and in iterations; we approach projects by identifying a problem, testing new ideas and developing prototypes. We use open source libraries and share our work on [Github](https://github.com/CityOfDetroit).

We're currently excited to be building:
- [route-explorer](https://github.com/CityOfDetroit/route-explorer) 
  - We're working with DDOT to redesign how we provide bus schedules on the City's website (spoiler: they're a list of downloadable PDFs right now)
- [detroit-js-sdk](https://github.com/CityOfDetroit/detroit-js-sdk)
  - We're building a support library that makes a lot City open data easily available with a single `npm install`
- [this website](https://github.com/CityOfDetroit/iet)
  - We're using [Gatsby.js](https://www.gatsbyjs.org/), a static site generator for React and GraphQL, and it's really just a very enjoyable developer experience

Contributions in the form of feature requests, bug reports and code patches are welcome to all our projects. Find notes on using Github issues and pull requests in our [Code Standards](https://github.com/cityofDetroit/code-standards) repository, or just send us an [email](mailto:iet@detroitmi.gov).

### How we'll be using this blog

You can expect to read about:

- Open data changelogs: monthly updates and revisions for https://data.detroitmi.gov 
- Project launches: posts about tools or apps that we've built and how you can use them
- Code snippets: technical tips, tricks, and cool things we're learning
- Team updates: reflections and occasional job opportunities

Thanks for reading, and more soon.
