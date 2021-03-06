// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../DocsArticle');

var Architecture = React.createClass({
  render: function () {
    return (
      <DocsArticle title="Architecture" colorIndex="neutral-4">
        <section>
          <a className="reference" id="technology-stack"> </a>
        	<h2>Technology Stack</h2>
        	<p>
            Grommet is based on <a href="http://reactjs.com" target="_blank">ReactJS</a> which
            provides great features in JavaScript for building user interfaces.
            You'll also use a JavaScript syntax extension called <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank">JSX</a>.
          </p>
          <p>
            We expect that you have at least a basic understanding on these
            technologies to be able to master Grommet, in addition to JavaScript
            of course. In terms of cascading style sheets (css), Grommet
            provides everything you need to quickly create applications
            based on the application <a data-to="design">Style Guide</a>.
            Under the hood, you'll find <a href="http://inuitcss.com/" target="_blank">InuitCSS</a> and <a href="http://sass-lang.com/" target="_blank">Sass</a>
            to compile the style sheets. But, don&#39;t worry, you are not
            expected to write a lot of CSS when using Grommet.
            We've done that for you.  But if you would like to contribute,
            please do so!
          </p>
        </section>
      </DocsArticle>
    );
  }
});

module.exports = Architecture;
